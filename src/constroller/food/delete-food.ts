import { Request, Response } from "express";
import FoodModel from "../../Model/food";

export const deleteFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  try {
    const deleteFood = await FoodModel.findByIdAndDelete(foodId);
    res.status(200).send(deleteFood);
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
