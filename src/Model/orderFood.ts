import { model, Schema } from "mongoose";

export enum foodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

const foodOrderItemSchema = new Schema({
  food: { type: Schema.Types.ObjectId, ref: "food", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const orderFoodSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users", required: true },
  totalPrice: { type: Number, required: true },
  foodOrderItems: [{ type: foodOrderItemSchema, required: true }],
  status: {
    type: String,
    required: true,
    enum: Object.values(foodOrderStatusEnum),
    default: foodOrderStatusEnum.PENDING,
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

export default model("orderFood", orderFoodSchema);
