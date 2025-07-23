import { Request, Response } from "express";
import orderFoodModel from "../../Model/orderFood";
import { ObjectId } from "mongodb";

export const getFoodOrderById = async (req: Request, res: Response) => {
  const { Id } = req.params;
  console.log(Id);
  try {
    const orderFoodId = await orderFoodModel
      .find({
        user: new ObjectId(Id),
      })
      .populate({
        path: "foodOrderItems",
        populate: {
          path: "food",
        },
      });
    console.log(orderFoodId);
    res.status(200).send(orderFoodId);
  } catch (error) {
    res.status(404).send({ message: "API error", error });
  }
};
