import authMiddleware from "@/middleware/auth";
import express, { Request, Response } from "express";
const order = express.Router();

order.use(authMiddleware);

order.get("/add", async (req: Request, res: Response) => {
  res.status(200).send("everything is good");
});

export default order;
