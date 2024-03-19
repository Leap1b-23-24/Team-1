import { RequestHandler } from "express";
import { UserModel } from "../model/user.model";

export const signUp: RequestHandler = async (req, res) => {
  const { userName, email, password, marketName } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (user)
    return res.json({
      message: "User already exists",
    });

  await UserModel.create({
    userName: userName,
    email: email,
    password: password,
    marketName: marketName,
  });

  res.json({
    message: "User created successfully",
  });
};
