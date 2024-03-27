import mongoose, { Schema, model } from "mongoose";
const commentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: false,
  },
  productId: String,
  comment: String,
  rating: {
    type: Number,
    required: false,
  },
  createdAt: Date,
  updatedAt: Date,
});
export const CommentModel = model("comment", commentSchema);
