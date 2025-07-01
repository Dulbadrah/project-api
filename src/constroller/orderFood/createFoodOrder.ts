import { Request, Response } from "express";
import orderFoodModel from "../../Model/orderFood";

export const createFoodOrder = async (req: Request, res: Response) => {
  const { totalPrice, foodOrderItems, user, status } = req.body;
  try {
    const createFoodOrder = await new orderFoodModel({
      user,
      totalPrice,
      foodOrderItems,
      status,
    }).save();
    res.status(200).send({ success: true, createFoodOrder });
  } catch (error) {
    res.status(404).send({ messege: "api error", error });
  }
};
