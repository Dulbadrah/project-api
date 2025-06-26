import { Request, Response } from "express";
import userModel from "../../Model/user";

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
