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
    orderDetails: [
      {
        shopId: String,
        _id: String,
        productName: String,
        productColor: String,
        image: String,
        price: Number,
        quantity: Number,
      },
    ],
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true }
);

export const OrderModel = model("order", orderSchema);
