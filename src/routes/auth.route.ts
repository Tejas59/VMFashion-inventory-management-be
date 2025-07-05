import {
  loginFun,
  logoutFun,
  registrationFun,
} from "@/controller/authentication";
import express, { Request, Response } from "express";

const auth = express.Router();

auth.get("/temp", async (req: Request, res: Response) => {
  res.status(200).send("everything is good");
});

auth.post("/register", async (req: Request, res: Response) => {
  const result = await registrationFun(req, res);
  res.status(200).json(result);
});

auth.post("/login", async (req: Request, res: Response) => {
  const result = await loginFun(req, res);
  res.status(200).json(result);
});

auth.get("/logout", async (req: Request, res: Response) => {
  const result = await logoutFun(res);
  res.status(200).json(result);
});

export default auth;
