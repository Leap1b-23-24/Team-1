"use client";

import { PaymentInformation } from "@/components/ProductComponents";
import DeliveryInformation from "@/components/ProductComponents/DeliveryInformation";
import { OrderDetail1 } from "@/components/ProductComponents/orderComps/OrderDetail1";
import { useOrder } from "@/providers/OrderProvider";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderDetailPage() {
  const { orderDetails, orderInfo } = useOrder();
  const router = useRouter();

  useEffect(() => {
    !orderInfo.id ? router.push("/dashboard/orderPage") : null;
  }, []);
  return (
    <Stack width="100%" bgcolor="#F7F7F8" height="95vh">
      <Stack
        width="100%"
        padding={2}
        direction="row"
        gap={3}
        fontSize="16px"
        fontWeight={400}
        alignItems="center"
        bgcolor="white"
      >
        <Stack
          sx={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/dashboard/orderPage");
          }}
        >
          <ArrowBackIosNewOutlined />
        </Stack>
        {"Захиалгын дэлгэрэнгүй"}
      </Stack>

      <Stack direction="row" padding={3} gap={3} width="100%">
        <OrderDetail1
          order={orderDetails}
          orderNumber={orderInfo.id}
          orderState="Paid"
          user={orderInfo.ordererName}
          userEmail={orderInfo.ordererEmail}
          userNumber=""
        />
        <Stack gap={3}>
          <DeliveryInformation />
          <PaymentInformation orderDetails={orderDetails} />
        </Stack>
      </Stack>
    </Stack>
  );
}
