import express from 'express'

import { create, deleteUser, getAllUsers, getUserById, update } from "../controller/userController.js"

const route = express.Router();

route.post("/user", create);

route.get("/users", getAllUsers);
route.get("/users/:id", getUserById);
route.delete("/delete/user/:id", deleteUser);
route.put("/update/user/:id", update);

export default route;