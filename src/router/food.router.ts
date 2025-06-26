import exspress from "express";
import { createFood } from "../constroller/food/create-food";
import { getFood } from "../constroller/food/get-food";
import { deleteFood } from "../constroller/food/delete-food";
import { getFoodById } from "../constroller/food/get-foodById";
import { patchFood } from "../constroller/food/put-food-ById";


const foodRouter = exspress.Router();

foodRouter.post("/", createFood);

foodRouter.get("/", getFood);

foodRouter.get("/:Id", getFoodById);

foodRouter.delete("/:foodId", deleteFood);

foodRouter.put("/:foodIds", patchFood);

// foodCatergoryRouter.patch("/deleteCategorys/:foodId", patchFoodCategory);

export default foodRouter;
