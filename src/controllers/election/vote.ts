import { Request, Response } from "express";
import { AppResError } from "../../types/extensions/appResError";
import { voteDTO } from "../../types/DTOs/electionDTOs";
import { User } from "../../types/schemas/userSchema";
import { Candidate } from "../../types/schemas/candSchema";

export const vote = async (req: Request<any, any, voteDTO>, res: Response) => {
  try {
    const id = req.token!.id;
    const user = await User.findById(id);
    if (!user) throw new AppResError(404, "n");
    if (user.hasVoted) throw new AppResError(403, "you are already voted!");

    const cand = await Candidate.findOne({ name: req.body.candidate });
    if (!cand) throw new AppResError(404, "Candidate isn't exsists");

    user.hasVoted = true;
    user.votedFor = cand.id;
    await user.save();

    res.status(201).send("your vote accepted successfully!");
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};
