

import { Request, Response } from "express";
import foodCategory from "../../Model/foodCategory";
import userModel from "../../Model/user";

export const createUser = async (req: Request, res: Response) => {

  const { email, password, phoneNumber, address, isVerified } = req.body;

  try {
    const userData = await new userModel({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      isVerified: isVerified
    }).save();


    console.log(userData)
    res.status(200).send({ success: true, userData });
  } catch (error) {
    res.status(404).send({ messege: "api error", error });
  }
};
