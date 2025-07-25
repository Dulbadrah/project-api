import { Schema } from "mongoose";

export type FoodCategoryModelType = {
  categoryName: String;

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};