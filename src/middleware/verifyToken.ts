/// <reference path="../types/extensions/appRequest.d.ts" />

import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { AppResError } from "../types/extensions/appResError";
import { IToken } from "../types/models/IToken";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const token = req.cookies.token;
    const token = req.header("Authorization")
    if (!token) throw new AppResError(401, "Login first!");

    req.token = jwt.verify(token, process.env.SECRET_KEY!) as IToken;
    next();
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};