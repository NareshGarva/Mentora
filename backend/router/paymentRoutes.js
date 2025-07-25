import express from "express";
import {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentStatus
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/", createPayment);
router.get("/", getAllPayments);
router.get("/:id", getPaymentById);
router.put("/:id/status", updatePaymentStatus);

export default router;
