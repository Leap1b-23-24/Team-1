import { RequestHandler } from "express";
import { UserModel } from "../model/admin.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { json } from "body-parser";

export const signUp: RequestHandler = async (req, res) => {
  const { userName, email, password, marketName, role } = req.body;

  // console.log(userName, email, password, marketName, role);

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
      role: role,
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

    const userRole = user.role;

    const token = jwt.sign({ userId, userRole }, "secret-key");

    res.json({ token: token, role: user.role });
  } catch (error) {
    console.log(error, "logIn error");
  }
};

export const getUserName: RequestHandler = async (req, res) => {

  const { authorization } = req.headers;

  try {
    if (!authorization) return;

    const { userId: id } = jwt.verify(
      authorization,
      "secret-key"
    ) as JwtPayload;

    const user = await UserModel.findById(id);

    res.json({
      userName: user?.userName,
    });

  } catch (error) {}
};
