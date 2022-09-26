import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import "express-async-errors";
import { router } from "./routes";
import { AppError } from "../../errors/AppError";
import "../../container";
import { schedule } from "node-cron";

export const app = express();

app.use(express.json());
app.use(router);

// let d = new Date().getDate();

// schedule(`* * 22 * *`, () => {
//   console.log("Executando cron...");
// });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});
