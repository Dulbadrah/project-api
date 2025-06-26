import { model, Schema } from "mongoose";

const foodCategorySchema = new Schema({
  categoryName: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now() },
  createdAt: { type: Date, default: Date.now() },
});

const FoodCategory = model("foodCategory", foodCategorySchema);

export default FoodCategory;
