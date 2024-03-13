"use client";

import { IncomeHeader, ProductHeader } from "@/components/ProductComponents";

import { IncomeFooter } from "@/components/ProductComponents/IncomeFooter";

import { ProductFilter } from "@/components/ProductComponents/ProductFilter";
import { IncomeFooterTopCom } from "@/components/ProductComponents/income";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <ProductHeader />

      <IncomeHeader />

      <IncomeFooterTopCom />
    </>
  );
}
