import { Router } from "express";
import {
  addCategory,
  getCategory,
  getSingleCategory,
  getSubCategory,
} from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter
  .post("/add", addCategory)
  .get("/get", getCategory)
  .get("/getSub", getSubCategory)
  .post("/getSingle", getSingleCategory);

export default categoryRouter;
