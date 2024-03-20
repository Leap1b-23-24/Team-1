import { RequestHandler } from "express";
import { ProductModel } from "../model/product.model";
import Jwt, { JwtPayload } from "jsonwebtoken";

export const addProduct: RequestHandler = async (req, res) => {
  const {
    productName,
    productPrice,
    categoryId,
    quantity,
    images,
    description,
    productCode,
  } = req.body;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "No toke found" });
  }
  const shopId = Jwt.verify(authorization, "secret-key") as JwtPayload;

  try {
    await ProductModel.create({
      productName,
      shopId,
      productPrice,
      productCode,
      categoryId,
      quantity,
      images,
      description,
    });

    res.json({ message: "Product added to your store" });
  } catch (error) {
    console.log(error);
  }
};

export const getUserProduct: RequestHandler = async (req, res) => {
  try {
    const products = await ProductModel.find({});

    res.json({ products });
  } catch (error) {
    console.log(error);
  }
};
