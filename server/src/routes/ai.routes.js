import express from "express";
import {generateInsight} from "../controllers/ai.controller.js"

const router = express.Router();

router.post("/insight", generateInsight);

export default router;