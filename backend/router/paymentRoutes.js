import express from "express";
import {
  getAllPayments,
  getPaymentById,
  updatePaymentStatus
} from "../controllers/paymentController.js";

const router = express.Router();

router.get("/", getAllPayments);
router.get("/:id", getPaymentById);
router.put("/:id/status", updatePaymentStatus);

export default router;
