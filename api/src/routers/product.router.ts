import { Router } from "express";
import { addProduct } from "../controllers/product.controller";

const productRouter = Router();

productRouter.post("/add", addProduct);

export default productRouter;
