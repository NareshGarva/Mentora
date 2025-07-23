import express from "express";
import {
  createSession,
  getAllSessions,
  getSessionById,
  updateSessionStatus,
  deleteSession
} from "../controllers/sessionController.js";

const router = express.Router();

router.post("/", createSession);
router.get("/", getAllSessions);
router.get("/:id", getSessionById);
router.put("/:id/status", updateSessionStatus);
router.delete("/:id", deleteSession);

export default router;
