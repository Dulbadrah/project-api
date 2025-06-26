import { Request, Response } from "express";
import FoodModel from "../../Model/food";

export const patchFood = async (req: Request, res: Response) => {
  const { foodIds } = req.params;
  const { foodName, price, image, ingredients,category } = req.body;
  try {
    const updateData = await FoodModel.findByIdAndUpdate(foodIds ,{ foodName: foodName, price: price, image: image, ingredients: ingredients ,category},{new:true});
    console.log(updateData);

    res.status(200).send({ success: true, updateData });
  } catch (error) {
    res.status(404).send({ messege: "api error", error });
  }
};
