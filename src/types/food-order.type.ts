import { Schema } from "mongoose";
import { UserModelType } from "./user.type";
import { FoodOrderItemModelType } from "./food-order-item.type";
import { foodOrderStatusEnum } from "../Model/orderFood";


export type FoodOrderModelType = {
  /* Order Identity */
  _id: Schema.Types.ObjectId;
  user: UserModelType;

  /* Order Details */
  totalPrice: number;
  foodOrderItems: FoodOrderItemModelType[];

  /* Order Status */
  status: foodOrderStatusEnum;

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};