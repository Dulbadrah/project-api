import exspress from "express";
import { createFood } from "../constroller/food/create-food";
import { createFoodOrder } from "../constroller/orderFood/createFoodOrder";
import { getFoodOrder } from "../constroller/orderFood/orderFoodGet";
import { getFoodOrderById } from "../constroller/orderFood/orderFoodGetById";



const orderFoodRouter = exspress.Router();

orderFoodRouter.post("/", createFoodOrder);
orderFoodRouter.get("/", getFoodOrder);
orderFoodRouter.get("/:Id", getFoodOrderById);

export default orderFoodRouter;
