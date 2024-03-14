import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    shopId: String,
    productName: String,
    productPrice: String,
    categoryId: String,
    quantity: Number,
    thumbNails: String,
    images: [{ link1: String }, { link2: String }, { link3: String }],
    salePercent: Number,
    description: String,
    viewsCount: String,
  },
  { timestamps: true }
);

export const ProductModel = model("product", productSchema);
