import "dotenv/config";
import { app } from "./src/app.js";
import express from "express";
import cors from "cors";
import { connectDB, prisma } from "./db/dbConfig.js";
import productRoutes from "./src/routes/products.routes.js";
import orderRoutes from "./src/routes/orders.routes.js"
import aiRoutes from "./src/routes/ai.routes.js"

const port = process.env.PORT || "5001";

// Connecting Database
connectDB();

app.use(express.json());
app.use(cors());

// Using Middleware for routes
const prefixApi ="/api";
app.use(`${prefixApi}/products`, productRoutes);
app.use(`${prefixApi}/orders`, orderRoutes);
app.use(`${prefixApi}/ai`, aiRoutes)

app.listen(port, () => {
  console.log("Server running on", port);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("Shutting down server..");
  await prisma.$disconnect();
  process.exit(0);
});