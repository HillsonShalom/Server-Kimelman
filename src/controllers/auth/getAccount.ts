
import { Request, Response } from "express";
import { AppResError } from "../../types/extensions/appResError";
import { User } from "../../types/schemas/userSchema";

export const getAccount = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.token!.id).select('-password').populate('votedFor').exec()
    res.json(user)
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};