import express from "express";
import { database } from "./database.js";

export const app = express();

app.get("/api/health", (_request, response) => {
  try {
    database.prepare("SELECT 1").get();
    response.status(200).json({ status: "ok", database: "connected" });
  } catch (error) {
    console.error("Database health check failed:", error);
    response.status(503).json({ status: "error", database: "unavailable" });
  }
});
