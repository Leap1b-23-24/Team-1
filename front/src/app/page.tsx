"use client";

import { IncomeFooter } from "@/components/ProductComponents/IncomeFooter";

import {
  IncomeHeader,
  PaymentInformation,
  ProductCard,
  ProductHeader,
} from "@/components/ProductComponents";

import { ProductFilter } from "@/components/ProductComponents/ProductFilter";
import { Stack } from "@mui/material";
import { useState } from "react";
import { IncomeFooterTopCom } from "@/components/ProductComponents/income";
import DeliveryInformation from "@/components/ProductComponents/DeliveryInformation";

export default function Home() {
  return (
    <>
      <ProductHeader />

      <IncomeHeader />

      <IncomeFooterTopCom />

      <ProductCard
        productId={34}
        productName="horsebit"
        productPrice={58000}
        productQuantity={2}
        date="2024-03-02"
        totalPrice={580000}
      />
      <PaymentInformation />
    </>
  );
}
