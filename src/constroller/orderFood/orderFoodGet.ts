import { Request, Response } from "express";
import orderFoodModel from "../../Model/orderFood";

export const getFoodOrder = async (req: Request, res: Response) => {
  try {
    const orderFood = await orderFoodModel.find();
    res.status(200).send(orderFood);
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
