"use client";
import { ArrowDropDown } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { OrderDetailTop } from "./OrderDetailTop";
import { ProductCard, ProductCardType } from "..";
import { BucketProductType } from "@/providers/OrderProvider";
import { api } from "@/common";

type OrderDetail1Props = {
  orderNumber: string;
  user: string;
  userEmail: string;
  userNumber: string;
  order: BucketProductType[];
  orderState: string;
  setOrderState?: Dispatch<SetStateAction<string>>;
};

export const OrderDetail1 = (props: OrderDetail1Props) => {
  const { orderNumber, user, userEmail, userNumber, order } = props;
  const [isShown, setIsShown] = useState(false);
  const [id, setId] = useState<string>("");

  const getUserId = async (setId: Dispatch<SetStateAction<string>>) => {
    try {
      const res = await api.get("/user/getUserId", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setId(res.data.userId);
    } catch (error) {}
  };

  useEffect(() => {
    getUserId(setId);
  }, []);

  return (
    <Stack
      width={"100%"}
      height={"100%"}
      border={"1px solid #ECEDF0"}
      borderRadius={4}
      p={3}
      gap={3}
      bgcolor={"white"}
    >
      <Stack width={"100%"} flexDirection={"row"}>
        <Typography fontSize={16}>Захиалгын ID дугаар : </Typography>
        <Typography fontSize={16} fontWeight={600}>
          {" "}
          {orderNumber}
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Stack direction={"row"} gap={0.5}>
          <Typography fontSize={16}>Захиалагч: </Typography>
          <Typography fontSize={16}>Хувь хүн </Typography>
        </Stack>
        <Stack direction={"row"} gap={0.5}>
          <Typography fontSize={16} fontWeight={600}>
            {` ${user}-`}
          </Typography>
          <Typography fontSize={16}>{`${userEmail}, ${userNumber}`}</Typography>
        </Stack>
      </Stack>
      {order.map((item, index) => {
        const { productName, price, image, quantity } = item;
        return (
          <ProductCard
            key={index}
            productName={productName}
            productPrice={price}
            productPicture={image[0]}
            productQuantity={quantity}
          />
        );
      })}
    </Stack>
  );
};
