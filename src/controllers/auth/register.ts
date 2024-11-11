import { Request, Response } from "express";
import { AppResError } from "../../types/extensions/appResError";
import { registerDTO } from "../../types/DTOs/authTDOs";
import { IUser } from "../../types/models/IUser";
import bcrypt from "bcrypt";
import { User } from "../../types/schemas/userSchema";

export const register = async (
  req: Request<any, any, registerDTO>,
  res: Response
) => {
  try {
    const user = new User({
      ...req.body,
      password: await bcrypt.hash(req.body.password, 5),
    });
    await user.save()
    res.status(201).send(user.username + "has register successfully!");
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};
