import { Request, Response } from "express";
import userModel from "../../Model/user";

export const resetPassword = async (req: Request, res: Response) => {
  const { PassId } = req.params;
  const { password } = req.body;
  console.log(PassId);

  try {
    const updatePassword = await userModel.findByIdAndUpdate(
      PassId,
      {
        password: password,
      },
      { new: true }
    );

    res.status(200).send({ success: true, updatePassword });
  } catch (error) {
    res.status(404).send({ messege: "api error", error });
  }
};
