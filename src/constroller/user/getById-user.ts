import { Request, Response } from "express";
import userModel from "../../Model/user";

export const getUserById = async (req: Request, res: Response) => {
  const{userId}= req.params
  try {
    const users = await userModel.findById(userId);
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
