import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    shopId: String,
    productName: String,
    productPrice: Number,
    productCode: String,
    categoryId: String,
    subCategoryId: String,
    quantity: Number,
    thumbNails: String,
    images: Object,
    salePercent: Number,
    soldQuantity: Number,
    description: String,
    viewsCount: String,
    comment: [
      {
        userName: String,
        comment: String,
        rating: Number,
      },
    ],
  },
  { timestamps: true }
);

export const ProductModel = model("product", productSchema);
