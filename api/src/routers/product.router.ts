import { Router } from "express";
import {
  addProduct,
  getAdminProduct,
  getAllProducts,
  getUserProduct,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .post("/add", addProduct)
  .get("/getUser", getUserProduct)
  .get("/getAdmin", getAdminProduct)
  .get("/getAllProducts", getAllProducts);

export default productRouter;
