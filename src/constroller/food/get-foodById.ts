import { Request, Response } from "express";
import FoodModel from "../../Model/food";

export const getFoodById = async (req: Request, res: Response) => {
  const { Id } = req.params;
  try {
    const food = await FoodModel.findById(Id);
    res.status(200).send(food);
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
