import express from "express";
import cors from "cors";
import { json } from "body-parser";
import productRouter from "./routers/product.router";
import authRouter from "./routers/auth.router";
import categoryRouter from "./routers/category.router";
import orderRouter from "./routers/order.router";
import singleProductRouter from "./routers/singleProduct.router";

const app = express();
app.use(json());
app.use(cors());

app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/user", authRouter);
app.use("/order", orderRouter);
app.use("/singleProduct", singleProductRouter);

export default app;
