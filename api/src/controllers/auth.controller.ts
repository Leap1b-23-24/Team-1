import { RequestHandler } from "express";

export const signUp: RequestHandler = async (req, res) => {
  const { name, email, password, marketName } = req.body;
};
