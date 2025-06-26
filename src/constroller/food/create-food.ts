import { Request, Response } from "express";
import FoodModel from "../../Model/food";

export const createFood = async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const Food = await new FoodModel({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      category,
    }).save();
    res.status(200).send({ success: true, Food });
  } catch (error) {
    res.status(404).send({ messege: "api error", error });
  }
};
