import { RequestHandler } from "express";
import { ProductModel } from "../model/product.model";

export const addProduct: RequestHandler = async (req, res) => {
  const {
    productName,
    shopId,
    productPrice,
    categoryId,
    quantity,
    thumbNails,
    link1,
    link2,
    link3,
    salePercent,
    description,
  } = req.body;
  try {
    await ProductModel.create({
      productName,
      shopId,
      productPrice,
      categoryId,
      quantity,
      thumbNails,
      images: [{ link1 }, { link2 }, { link3 }],
      salePercent,
      description,
    });

    res.json({ message: "Product added to your store" });
  } catch (error) {
    console.log(error);
  }
};
