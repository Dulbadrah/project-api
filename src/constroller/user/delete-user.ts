import { Request, Response } from "express";
import userModel from "../../Model/user";

export const deleteUser = async (req: Request, res: Response) => {
  const { userDeleteId } = req.params;
  try {
    const deleteUser = await userModel.findByIdAndDelete(userDeleteId);
    res.status(200).send(deleteUser);
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
