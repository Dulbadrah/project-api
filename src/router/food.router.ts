import exspress from "express";
import { createFood } from "../constroller/food/create-food";
import { getFood } from "../constroller/food/get-food";
import { deleteFood } from "../constroller/food/delete-food";
import { getFoodById } from "../constroller/food/get-foodById";

const foodRouter = exspress.Router();

foodRouter.post("/", createFood);
foodRouter.get("/", getFood);
foodRouter.get("/:Id", getFoodById);
foodRouter.delete("/:foodId", deleteFood);
// foodCatergoryRouter.patch("/deleteCategorys/:foodId", patchFoodCategory);

export default foodRouter;
