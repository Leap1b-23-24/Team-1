import { Schema, model } from "mongoose";

const subCategorySchema = new Schema({ name: String });

export const SubCategoryModel = model("subCategory", subCategorySchema);
