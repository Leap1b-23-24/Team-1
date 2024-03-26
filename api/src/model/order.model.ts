import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    orderNumber: String,
    status: String,
    contactInfo: String,
    orderer: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    deliveryDate: Date,
    amountPaid: Number,
    amountToBePaid: Number,
    coupon: {
      type: String,
      required: false,
    },
    description: String,
    orderType: String,
    orderDetails: [{ id: String, quantity: Number, shopId: String }],
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true }
);

export const OrderModel = model("order", orderSchema);
