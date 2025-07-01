import { Request, Response } from "express";
import orderFoodModel from "../../Model/orderFood";

export const deleteOrderFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  try {
    const deleteOrderFood = await orderFoodModel.findByIdAndDelete(foodId);
    res.status(200).send(deleteOrderFood);
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
