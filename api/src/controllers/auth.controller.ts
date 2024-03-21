import { RequestHandler } from "express";
import { UserModel } from "../model/admin.model";
import jwt from "jsonwebtoken";

export const signUp: RequestHandler = async (req, res) => {
  const { userName, email, password, marketName } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });

    if (user)
      return res.status(401).json({
        message: "Бүртгэлтэй хэрэглэгч байна",
      });

    await UserModel.create({
      userName: userName,
      email: email,
      password: password,
      marketName: marketName,
    });

    res.json({
      message: "Амжилттай бүртгэгдлээ",
    });
  } catch (error) {
    console.log(error, "signup error");
  }
};

export const logIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });

    if (!user)
      return res
        .status(401)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });

    if (password !== user.password)
      return res.status(401).json({ message: "Нууц үг буруу байна" });

    const userId = user._id;

    const token = jwt.sign({ userId }, "secret-key");

    res.json({ token: token });
  } catch (error) {
    console.log(error, "logIn error");
  }
};
