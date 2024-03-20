"use client";
import { ArrowDropDown } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { OrderDetailTop } from "./OrderDetailTop";
import { ProductCard, ProductCardType } from "..";

type OrderDetail1Props = {
  orderNumber: string;
  user: string;
  userEmail: string;
  userNumber: string;
  order: object[];
  orderState: string;
  setOrderState?: Dispatch<SetStateAction<string>>;
};

export const OrderDetail1 = (props: OrderDetail1Props) => {
  const {
    orderNumber,
    user,
    userEmail,
    userNumber,
    order,
    orderState,
    setOrderState,
  } = props;
  const [isShown, setIsShown] = useState(false);
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
      <OrderDetailTop
        orderNumber={orderNumber}
        // setOrderState={setOrderState}
        isShown={isShown}
        setIsShown={setIsShown}
      />
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
      {order.map((item: any, index) => {
        return (
          <Stack key={index}>
            <ProductCard
              productName={item.productName}
              productPrice={item.price}
              productQuantity={item.quantity}
            />
          </Stack>
        );
      })}
    </Stack>
  );
};
