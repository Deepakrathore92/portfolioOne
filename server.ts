import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { connectDB, getDbStatus } from "./backend/config/db.js";
import contactRoutes from "./backend/routes/contactRoutes.js";
import projectRoutes from "./backend/routes/projectRoutes.js";
import serviceRoutes from "./backend/routes/serviceRoutes.js";
import { errorHandler } from "./backend/middleware/errorMiddleware.js";

dotenv.config();

// Attempt MongoDB Connection
connectDB();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Health Check
  app.get("/api/health", (req, res) => {
    const dbStatus = getDbStatus();
    res.json({
      status: "ok",
      serverTime: new Date().toISOString(),
      developer: "Deepak Rathore",
      role: "Full Stack Developer",
      contact: {
        email: "deepakrathore9027020946@gmail.com",
        phone: ["7017168400", "9258446582"],
        education: "BCA - Completed"
      },
      database: dbStatus
    });
  });

  // REST API Routes
  app.use("/api/contact", contactRoutes);
  app.use("/api/projects", projectRoutes);
  app.use("/api/services", serviceRoutes);

  // Error handling middleware for API routes
  app.use("/api", errorHandler);

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✨ Deepak Rathore Full Stack Portfolio running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
