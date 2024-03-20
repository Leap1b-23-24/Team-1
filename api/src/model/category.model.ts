import { Schema, model } from "mongoose";

const categorySchema = new Schema({ name: String, shopId: String });

export const CategoryModel = model("category", categorySchema);
