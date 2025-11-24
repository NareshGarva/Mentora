import express from "express";
import {
  initiateSession,verifyPayment
} from "../controllers/sessionController.js";
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

  // All routes below require authentication
router.use(verifyToken);


router.post("/initiate-session", initiateSession);
router.post("/verify-payment", verifyPayment);
// router.get("/", getAllSessions);
// router.get("/:id", getSessionById);
// router.put("/:id/status", updateSessionStatus);
// router.delete("/:id", deleteSession);

export default router;
