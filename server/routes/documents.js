import express from "express";
import multer from "multer";
import Document from "../models/Document.js";
import path from "path";

const router = express.Router();

// 🔧 Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// 📄 Get all documents
router.get("/", async (req, res) => {
  try {
    const docs = await Document.find().sort({ uploadedAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📤 Upload + Create document
router.post("/upload", upload.single("file"), async (req, res) => {
  const { title, uploadedBy, tags } = req.body;

  try {
    const fileUrl = `http://localhost:5001/uploads/${req.file.filename}`;

    const newDoc = new Document({
      title,
      uploadedBy,
      fileUrl,
      tags: tags ? tags.split(",") : [],
    });

    const saved = await newDoc.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

export default router;
