import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { CommentModel, ProductModel } from "../model";
import { CategoryModel } from "../model/category.model";

export const addComment: RequestHandler = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(401).json({
        message: "Cэтгэгдэл бичихийн тулд эхлээд бүртгүүлнэ үү",
      });

    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const userId = id;

    await CommentModel.create({
      userId: userId,
      productId: productId,
      comment: comment,
      rating: rating,
    });
    return res.json({ message: "comment added:)" });
  } catch (err) {
    res.json(err);
  }
};
export const getAllComments: RequestHandler = async (req, res) => {
  try {
    const allComments = await CommentModel.find({}).populate("userId");
    return res.json(allComments);
  } catch (err) {
    res.json(err);
  }
};
