import express from "express";
import Document from "../models/Document.js";
import Task from "../models/Task.js";

const router = express.Router();

router.get("/summary", async (req, res) => {
  try {
    const totalDocuments = await Document.countDocuments();

    const taskStatusCounts = await Task.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    const tasks = {
      pending: 0,
      inProgress: 0,
      completed: 0,
      rejected: 0,
    };

    taskStatusCounts.forEach((item) => {
      const key = item._id.replace(" ", "");
      tasks[key] = item.count;
    });

    res.json({
      totalDocuments,
      tasks,
    });
  } catch (err) {
    res.status(500).json({ message: "Dashboard summary failed", error: err });
  }
});

export default router;
