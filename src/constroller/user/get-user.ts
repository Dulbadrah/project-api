import { Request, Response } from "express";

import userModel from "../../Model/user";
import { verify } from "../../utils/token";


export const getUser = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new Error("Authorization not found");
  }
  const token = authHeader?.split(" ")[1] || "";

  try {
    const isVerified = verify(token);

    const user = await userModel.findOne({ _id: isVerified.data.userId });

    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json("User not found");
  }
};