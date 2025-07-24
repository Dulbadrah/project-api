import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../../utils/token";
import userModel from "../../Model/user";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({
      email,
    });

    if (!user) {
      res.status(400).json({ message: "try again" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const data = { userId: user._id, role: user.role, email: user.email };

      const accessToken = createAccessToken(data);

      res.status(200).json({ success: true, accessToken });
    } else {
      res.status(400).json({ message: "try again" });
    }
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ success: false, error });
  }
};