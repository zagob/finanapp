import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "../../../config/auth";
import { AppError } from "../../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: account_id } = verify(token, auth.secret_token) as IPayload;

    req.person = {
      id: account_id,
    };

    return next();
  } catch (err) {
    throw new AppError("Invalid token!", 401);
  }
}
