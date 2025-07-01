import { Request, Response } from "express";
import orderFoodModel from "../../Model/orderFood";

export const getFoodOrderById = async (req: Request, res: Response) => {
  const { Id } = req.params;

  try {
    const orderFoodId = await orderFoodModel.findById(Id).populate("");
    res.status(200).send(orderFoodId);
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
