import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  marketName: String,
  role: String,
});

export const UserModel = model("user", userSchema);
