import exspress from "express";
import { createUser } from "../constroller/user/create-user";
import { getUser } from "../constroller/user/get-user";
import { getUserById } from "../constroller/user/getById-user";


const user = exspress.Router();

user.post("/", createUser);

user.get("/", getUser);

user.get("/:userId", getUserById);



export default user;
