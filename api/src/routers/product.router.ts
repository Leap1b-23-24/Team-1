import { Router } from "express";
import {
  addComment,
  addProduct,
  getAdminProduct,
  getAllProducts,
  getUserProduct,
} from "../controllers/product.controller";
import { addCategory } from "../controllers/category.controller";

const productRouter = Router();

productRouter
  .post("/add", addProduct)
  .get("/getUser", getUserProduct)
  .get("/getAdmin", getAdminProduct)
  .get("/getAllProducts", getAllProducts)
  .post("/addComment", addComment);

export default productRouter;
