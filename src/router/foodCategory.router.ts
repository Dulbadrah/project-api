import exspress from "express";
import { createFoodCategory } from "../constroller/foodCategory/create-food-category";
import { getFoodCategory } from "../constroller/foodCategory/get-food-category";
import { deleteFoodCategory } from "../constroller/foodCategory/delete-food-category";
import { patchFoodCategory } from "../constroller/foodCategory/patch-food-category";
const foodCatergoryRouter = exspress.Router();

foodCatergoryRouter.post("/", createFoodCategory);

foodCatergoryRouter.get("/", getFoodCategory);
foodCatergoryRouter.delete("/:foodId", deleteFoodCategory);
foodCatergoryRouter.put("/:foodId", patchFoodCategory);

export default foodCatergoryRouter;
