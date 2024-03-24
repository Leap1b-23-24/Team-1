import jwt, { JwtPayload } from "jsonwebtoken";
import { RequestHandler } from "express";

export const addOrder: RequestHandler = async (req, res) => {
  const { status, contactInfo, amountToBePaid, orderDetail } = req.body;
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).json({ message: "Та нэвтэрнэ үү!" });
    }

    const { userId } = jwt.verify(authorization, "secret-key") as JwtPayload;

    console.log(userId, status, contactInfo, amountToBePaid, orderDetail);
  } catch (error) {}
};
