import { Request, Response } from "express";
import foodCategory from "../../Model/foodCategory";

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const categories = await foodCategory.find();
    res.status(200).send({succes: true, categories});
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
