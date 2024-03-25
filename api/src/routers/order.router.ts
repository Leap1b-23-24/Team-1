import { Router } from "express";
import { addOrder, getAdminOrder } from "../controllers";

const orderRouter = Router();

export default orderRouter
  .post("/addOrder", addOrder)
  .get("/getAdmin", getAdminOrder);
