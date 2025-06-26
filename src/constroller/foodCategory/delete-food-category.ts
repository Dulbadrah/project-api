import { Request, Response } from "express";
import foodCategory from "../../Model/foodCategory";

export const deleteFoodCategory = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  try {
    const deleteFood = await foodCategory.findByIdAndDelete(foodId);
    res.status(200).send(deleteFood);
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
