import express from "express";
import { connectDb } from "./database/database";
import foodCatergoryRouter from "./router/foodCategory.router";
import foodRouter from "./router/food.router";
import user from "./router/user";
import orderFoodRouter from "./router/orderFood.router";

const app = express();
const port = 4100;  
app.use(express.json());
app.use("/category", foodCatergoryRouter);
app.use("/food", foodRouter);
app.use("/user", user);
app.use("/orderFood", orderFoodRouter);

app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port http://localhost:${port}`);
});
