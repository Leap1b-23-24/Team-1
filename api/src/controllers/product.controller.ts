import { RequestHandler } from "express";
import { ProductModel } from "../model/product.model";
import Jwt, { JwtPayload } from "jsonwebtoken";

export const addProduct: RequestHandler = async (req, res) => {
  const {
    productName,
    productPrice,
    categoryId,
    subCategoryId,
    quantity,
    images,
    description,
    productCode,
  } = req.body;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "No toke found" });
  }
  const { userId: shopId } = Jwt.verify(
    authorization,
    "secret-key"
  ) as JwtPayload;

  try {
    await ProductModel.create({
      productName,
      shopId,
      productPrice,
      productCode,
      categoryId,
      subCategoryId,
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
  const { quantity, date, special } = req.query;

  try {
    const products = await ProductModel.find({})
      .limit(Number(quantity))
      .sort(
        Boolean(date)
          ? { createdAt: -1 }
          : Boolean(special)
          ? { quantity: -1 }
          : {}
      );

    res.json({ products });
  } catch (error) {
    console.log(error);
  }
};

export const getAdminProduct: RequestHandler = async (req, res) => {
  const { category } = req.query;
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const { userId } = Jwt.verify(authorization, "secret-key") as JwtPayload;
  try {
    const products = await ProductModel.find(
      category === ""
        ? { shopId: userId }
        : { shopId: userId, categoryId: category }
    );

    res.json({ products });
  } catch (error) {}
};
export const getAllProducts: RequestHandler = async (req, res) => {
  try {
    const allProducts = await ProductModel.find({});
    if (!allProducts)
      return res.status(401).json({
        message: "Sorry we don't have any product for you",
      });
    res.json(allProducts);
  } catch (err) {
    res.json(err);
  }
};
