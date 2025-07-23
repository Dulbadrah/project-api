import { model, Schema } from "mongoose";

const foodSchema = new Schema({
  foodName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "foodCategory",
    required: true,
  },
  updatedAt: { type: Date, default: Date.now() },
  createdAt: { type: Date, default: Date.now() },
});

const FoodModel = model("food", foodSchema);
export default FoodModel;
