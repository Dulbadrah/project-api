import { Request, Response } from "express";
import foodCategory from "../../Model/foodCategory";

export const createFoodCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;

  console.log({
    categoryName,
  });

  try {
    const FoodCategory = await new foodCategory({
      categoryName: categoryName,
    }).save();

    res.status(200).send({ success: true, FoodCategory });
  } catch (error) {
    res.status(404).send({ messege: "api error", error });
  }
};
