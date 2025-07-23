import { Request, Response } from "express";
import userModel from "../../Model/user";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address, isVerified } = req.body;

  const hashedPasswort = await bcrypt.hash(password, 10);

  try {
    const userData = await new userModel({
      email: email,
      password: hashedPasswort,
      phoneNumber: phoneNumber,
      address: address,
      isVerified: isVerified,
    }).save();

    console.log(userData);
    res.status(200).send({ success: true, userData });
  } catch (error) {
    res.status(404).send({ messege: "api error", error });
  }
};
