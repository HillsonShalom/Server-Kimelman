import { Request, Response } from "express";
import { AppResError } from "../../types/extensions/appResError";
import { Candidate } from "../../types/schemas/candSchema";

export const candidates = async (req: Request, res: Response) => {
  try {
    const cands = await Candidate.find({}).select('-_id -__v').exec();
    res.json(cands)
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};