import { Request, Response } from "express";
import userLoginModel from "../../Model/userLogin";
import jwt from "jsonwebtoken";

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await userLoginModel.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "mail buruu" });
      return;
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(404).json({ message: "nuuts ug buruu" });
      return;
    }
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "1d" }
    );
    res.status(200).json({ message: "newterlee", token });
  } catch (error) {
    res.status(404).json({ message: "api errors", error });
  }
};

