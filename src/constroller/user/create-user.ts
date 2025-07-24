import { Request, Response } from "express";

import bcrypt from "bcrypt";
import userModel from "../../Model/user";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, address, phoneNumber } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await userModel.create({
      email,
      password: hashedPassword,
      address,
      phoneNumber,
      isVerified: false,
    });

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ success: false, error });
  }
};