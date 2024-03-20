import { Router } from "express";
import { addProduct, getUserProduct } from "../controllers/product.controller";

const productRouter = Router();

productRouter.post("/add", addProduct).get("/getUser", getUserProduct);

export default productRouter;
