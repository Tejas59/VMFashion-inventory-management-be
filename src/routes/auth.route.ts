import express, { Request, Response } from 'express'


const auth = express.Router();

auth.get("/temp", async (req: Request, res: Response) => {
  res.status(200).send("everything is good");
});

export default auth;
