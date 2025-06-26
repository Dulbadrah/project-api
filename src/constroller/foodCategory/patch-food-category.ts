import { Request, Response } from "express";
import foodCategory from "../../Model/foodCategory";

export const patchFoodCategory = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const { categoryName } = req.body;
  console.log(foodId);

  try {
    const updateName = await foodCategory.findByIdAndUpdate(
      foodId,
      {
        categoryName: categoryName,
      },
      { new: true }
    );
    console.log(updateName);

    res.status(200).send({ success: true, updateName });
  } catch (error) {
    res.status(404).send({ messege: "api error", error });
  }
};
