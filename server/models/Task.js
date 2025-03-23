import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  documentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Document",
    required: true,
  },
  assignedTo: String, // Later: link this to a user collection
  status: {
    type: String,
    enum: ["pending", "in progress", "completed", "rejected"],
    default: "pending",
  },
  dueDate: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Task", taskSchema);
