import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import documentRoutes from './routes/documents.js'; // Import routes
import taskRoutes from './routes/tasks.js';
import dashboardRoutes from './routes/dashboard.js';






dotenv.config(); // Load .env variables

const app = express(); // Initialize Express app
// Middleware
app.use(cors());
app.use(express.json()); // <-- This line is important
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/documents", documentRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/dashboard", dashboardRoutes);

// API Routes
app.use("/api/documents", documentRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Root route (optional)
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🌐 Server running on port ${PORT}`));
