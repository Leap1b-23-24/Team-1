import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  orderNumber: String,
  status: String,
  phoneNumber: String,
  deliveryDate: Date,
  amountPaid: Number,
  amoutToBePaid: Number,
  coupon: {
    type: String,
    required: false,
  },
  description: String,
  orderType: String,
  details: [String],
  createdAt: Date,
  updatedAt: Date,
});

export const OrderModal = model("order", orderSchema);
