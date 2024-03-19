import { Router } from "express";
import {
  addCategory,
  getCategory,
  getSubCategory,
} from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter
  .post("/add", addCategory)
  .get("/get", getCategory)
  .get("/getSub", getSubCategory);

export default categoryRouter;
