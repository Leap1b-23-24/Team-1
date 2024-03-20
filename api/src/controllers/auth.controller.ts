import { RequestHandler } from "express";
import { UserModel } from "../model/admin.model";
import jwt from "jsonwebtoken";

export const signUp: RequestHandler = async (req, res) => {
  const { userName, email, password, marketName } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });

    if (user)
      return res.status(401).json({
        message: "User already exists",
      });

    await UserModel.create({
      userName: userName,
      email: email,
      password: password,
      marketName: marketName,
    });

    const createdUser = await UserModel.findOne({ email: email });

    if (!createdUser) {
      throw new Error();
    }

    const token = jwt.sign(createdUser._id.toJSON(), "secret-key");

    console.log(token);

    res.json({
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    console.log(error, "signup error");
  }
};
