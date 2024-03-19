import { RequestHandler } from "express";
import { ProductModel } from "../model/product.model";

export const addProduct: RequestHandler = async (req, res) => {
  const {
    productName,
    shopId,
    productPrice,
    categoryId,
    quantity,
    images,
    description,
  } = req.body;
  try {
    await ProductModel.create({
      productName,
      shopId,
      productPrice,
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
