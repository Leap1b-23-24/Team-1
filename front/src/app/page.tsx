"use client";

import { IncomeFooter } from "@/components/ProductComponents/IncomeFooter";

import {
  AreasBarChart,
  IncomeHeader,
  PaymentInformation,
  ProductCard,
  ProductHeader,
} from "@/components/ProductComponents";

import { ProductFilter } from "@/components/ProductComponents/ProductFilter";
import { Grid, Stack } from "@mui/material";
import { useState } from "react";
import { IncomeFooterTopCom } from "@/components/ProductComponents/income";
import DeliveryInformation from "@/components/ProductComponents/DeliveryInformation";
import DashboardInformation from "@/components/ProductComponents/DashboardInfo";
import { BarChartContainer } from "@/components/ProductComponents/ChartOptions";
import { SalesBarChart } from "@/components/ProductComponents/SellBar";
import { Footer } from "@/components/userComponents";

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
      <DashboardInformation name="Орлого" number={235000} />
      <Footer />
    </>
  );
}
