import { Router } from "express";
import { addOrder } from "../controllers";

const orderRouter = Router();

export default orderRouter.post("/addOrder", addOrder);
