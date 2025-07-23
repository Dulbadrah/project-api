import { model, Schema } from "mongoose";

enum foodOrderStatusEnum {
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
  // user: {
  //   type: Schema.Types.ObjectId,

  //   ref: "users",
  //   required: true,
  // },
  totalPrice: { type: Number, required: true },
  foodOrderItems: [{ type: foodOrderItemSchema, required: true }],
  status: {
    type: String,
    required: true,
    default: foodOrderStatusEnum.PENDING,
    enum: Object.values(foodOrderStatusEnum),
  },
  updatedAt: { type: Date, default: Date.now() },
  createdAt: { type: Date, default: Date.now() },
});

const orderFoodModel = model("orderFood", orderFoodSchema);
export default orderFoodModel;
