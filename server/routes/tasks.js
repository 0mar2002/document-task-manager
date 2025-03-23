import express from "express";
import Task from "../models/Task.js";
import { requireRole } from "../middleware/auth.js";


const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().populate("documentId");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", requireRole("admin"), async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Create a task
router.post("/", async (req, res) => {
  const { title, documentId, assignedTo, status, dueDate } = req.body;

  try {
    const newTask = new Task({
      title,
      documentId,
      assignedTo,
      status,
      dueDate,
    });

    const saved = await newTask.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ Update a task (status, assignee, dueDate, etc.)
router.put("/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // updates any field sent in body
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedTask); // Will return null if no task with that ID
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



export default router;
