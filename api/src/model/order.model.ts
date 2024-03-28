import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    status: String,
    contactInfo: String,

    orderer: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    amountToBePaid: Number,
    orderDetails: [
      {
        shopId: String,
        _id: String,
        productName: String,
        productColor: { type: String, required: false },
        image: [String],
        price: Number,
        quantity: Number,
        status: { type: String, required: false },
      },
    ],
  },
  { timestamps: true }
);

export const OrderModel = model("order", orderSchema);
