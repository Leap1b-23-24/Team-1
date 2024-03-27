import { Router } from "express";
import {
  getUserId,
  getUserName,
  logIn,
  signUp,
} from "../controllers/auth.controller";

const authRouter = Router();

authRouter
  .post("/signUp", signUp)
  .post("/logIn", logIn)
  .get("/getUserId", getUserId)
  .get("/getUserName", getUserName);

export default authRouter;
