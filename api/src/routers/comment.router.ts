import { Router } from "express";
import { addComment, getAllComments } from "../controllers/comment.controller";
const commentRouter = Router();

export default commentRouter
  .post("/addComment", addComment)
  .get("/getAllComments", getAllComments);
