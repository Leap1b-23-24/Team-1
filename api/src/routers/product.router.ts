import { Router } from "express";
import {
  addProduct,
  getAdminProduct,
  getUserProduct,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .post("/add", addProduct)
  .get("/getUser", getUserProduct)
  .get("/getAdmin", getAdminProduct);

export default productRouter;
