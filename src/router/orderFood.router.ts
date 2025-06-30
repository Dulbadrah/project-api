import exspress from "express";
import { createFood } from "../constroller/food/create-food";
import { createFoodOrder } from "../constroller/orderFood/createFoodOrder";
import { getFoodOrder } from "../constroller/orderFood/orderFoodGet";



const orderFoodRouter = exspress.Router();

orderFoodRouter.post("/", createFoodOrder);
orderFoodRouter.get("/", getFoodOrder);
orderFoodRouter.get("/:Id", getFoodOrder);

export default orderFoodRouter;
