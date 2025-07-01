import { Request, Response } from "express";
import FoodModel from "../../Model/food";
import orderFoodModel from "../../Model/orderFood";

export const updateOrderFood = async (req: Request, res: Response) => {
  const { foodIds } = req.params;
  const { totalPrice, price, quantily, ingredients, status, food } = req.body;
  try {
    const updateData = await orderFoodModel.findByIdAndUpdate(
      foodIds,
      {
        food: food,
        totalPrice: totalPrice,
        price: price,
        quantily: quantily,
        ingredients: ingredients,
        status: status,
      },
      { new: true }
    );

    console.log(updateData);

    res.status(200).send({ success: true, updateData });
  } catch (error) {
    res.status(404).send({ messege: "api error", error });
  }
};
