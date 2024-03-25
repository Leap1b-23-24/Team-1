import jwt, { JwtPayload } from "jsonwebtoken";
import { RequestHandler } from "express";
import { OrderModel } from "../model";

export const addOrder: RequestHandler = async (req, res) => {
  const { status, contactInfo, amountToBePaid, orderDetail } = req.body;
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).json({ message: "Та нэвтэрнэ үү!" });
    }

    const { userId } = jwt.verify(authorization, "secret-key") as JwtPayload;

    await OrderModel.create({
      status: status,
      orderer: userId,
      contactInfo: contactInfo,
      amountToBePaid: amountToBePaid,
      orderDetails: orderDetail,
    });

    res.json({ message: "Захиалга амжилттай !" });
  } catch (error) {
    console.log(error, "addOrder Error");
  }
};
