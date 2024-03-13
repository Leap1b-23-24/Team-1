import express from "express";
import cors from "cors";
import { json } from "body-parser";
import productRouter from "./routers/product.router";

const app = express();
app.use(json());
app.use(cors());

app.use("/product", productRouter);

export default app;
