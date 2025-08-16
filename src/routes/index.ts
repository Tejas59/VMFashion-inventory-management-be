import express from "express";
import auth from "./auth.route";
import order from "./order.route"

const router = express.Router();

router.use("/auth", auth);
router.use("/order",order);

export default router;
