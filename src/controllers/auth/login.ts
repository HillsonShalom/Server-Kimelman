import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AppResError } from "../../types/extensions/appResError";
import { loginDTO } from "../../types/DTOs/authTDOs";
import { User } from "../../types/schemas/userSchema";

export const login = async (
  req: Request<any, any, loginDTO>,
  res: Response
) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) throw new AppResError(404, "Ther's no user with that name!");

    if (!(await bcrypt.compare(req.body.password, user.password)))
      throw new AppResError(404, "Wrong request");

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
      expiresIn: "4h",
    });
    res.cookie("token", token);

    res.status(200).send("Welcome");
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};
