import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    shopId: String,
    productName: String,
    productPrice: String,
    categoryId: String,
    quantity: Number,
    thumbNails: String,
    images: Object,
    salePercent: Number,
    soldQuantity: Number,
    description: String,
    viewsCount: String,
  },
  { timestamps: true }
);

export const ProductModel = model("product", productSchema);
