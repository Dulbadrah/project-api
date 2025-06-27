import exspress from "express";
import { createUser } from "../constroller/user/create-user";
import { getUser } from "../constroller/user/get-user";
import { getUserById } from "../constroller/user/getById-user";
import { loginUser } from "../constroller/user/sign-in-user";
import { resetPassword } from "../constroller/user/restart-password-user";


const user = exspress.Router();

user.post("/", createUser);

user.get("/", getUser);

user.get("/:userId", getUserById);

user.delete("/:userDeleteId", getUserById);

user.put("/:PassId", resetPassword);

user.get("/login", loginUser)
export default user;
