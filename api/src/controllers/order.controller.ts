import jwt, { JwtPayload } from "jsonwebtoken";
import { RequestHandler } from "express";
import { OrderModel } from "../model";
import { raw } from "body-parser";

export const addOrder: RequestHandler = async (req, res) => {
  const { status, contactInfo, amountToBePaid, orderDetails } = req.body;
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
      orderDetails: orderDetails,
    });

    res.json({ message: "Захиалга амжилттай !" });
  } catch (error) {
    console.log(error, "addOrder Error");
  }
};

export const getAdminOrder: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { userId } = jwt.verify(authorization, "secret-key") as JwtPayload;

  try {
    const rawOrders = await OrderModel.find({
      orderDetails: {
        $elemMatch: {
          shopId: { $gte: userId },
        },
      },
    }).populate("orderer");

    const orders = rawOrders.map((item) => ({
      ...item,
      orderDetails: item.orderDetails.filter((each) => each.shopId == userId),
    }));

    console.log(orders);

    res.json({ orders });
  } catch (error) {}
};
