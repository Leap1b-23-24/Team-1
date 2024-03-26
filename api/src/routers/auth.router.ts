import { Router } from "express";
import { getUserName, logIn, signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter
  .post("/signUp", signUp)
  .post("/logIn", logIn)
  .get("/getUserName", getUserName);

export default authRouter;
