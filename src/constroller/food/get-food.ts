import { Request, Response } from "express";
import FoodModel from "../../Model/food";

export const getFood = async (req: Request, res: Response) => {
  try {
    const food = await FoodModel.aggregate([
      {
        $lookup: {
          from: "foodcategories",
          localField: "category",
          foreignField: "_id",
          as: "foodCategory",
        },
      },
      {
        $unwind: "$foodCategory",
      },
      {
        $group: {
          _id: "$foodCategory._id",
          categoryName: { $first: "$foodCategory.categoryName" },
          foods: {
            $push: {
              _id: "$_id",
              foodName: "$foodName",
              price: "$price",
              image: "$image",
              ingredients: "$ingredients",
            },
          },
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({ success: true, food });
  } catch (error) {
    res.status(500).json({ message: "API error", error });
  }
};
