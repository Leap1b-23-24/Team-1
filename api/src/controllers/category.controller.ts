import { RequestHandler } from "express";
import { CategoryModel } from "../model/category.model";
import { SubCategoryModel } from "../model/subCategory.model";
import jwt from "jsonwebtoken";

export const addCategory: RequestHandler = async (req, res) => {
  const { name, type } = req.body;
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const shopId = jwt.verify(authorization, "secret-key");
  try {
    const category = await CategoryModel.findOne({ name: name });
    const subCategory = await SubCategoryModel.findOne({
      name: name,
    });

    if (category || subCategory) {
      return res.status(401).json({
        message: "Ангилал аль хэдийн байна !",
      });
    }
    type === "general"
      ? await CategoryModel.create({ name, shopId })
      : await SubCategoryModel.create({ name, shopId });

    res.json({ message: "Ангилал нэмсэн" });
  } catch (error) {
    console.log(error, "category add error");
  }
};

export const getCategory: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const shopId = jwt.verify(authorization, "secret-key");
  try {
    const categories = await CategoryModel.find({ shopId: shopId });

    res.json({ categories });
  } catch (error) {
    console.log(error, "get category error");
  }
};

export const getSubCategory: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const shopId = jwt.verify(authorization, "secret-key");
  try {
    const categories = await SubCategoryModel.find({ shopId: shopId });

    res.json({ categories });
  } catch (error) {
    console.log(error, "get sub category error");
  }
};
