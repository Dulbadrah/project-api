import { Request, Response } from "express";
import FoodModel from "../../Model/food";

export const getFood = async (req: Request, res: Response) => {
  try {
    const food = await FoodModel.find();
    res.status(200).send(food);
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
