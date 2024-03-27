import { Router } from "express";
import { getSingleProduct } from "../controllers";

const singleProductRouter = Router();

singleProductRouter.post("/", getSingleProduct);

export default singleProductRouter;
