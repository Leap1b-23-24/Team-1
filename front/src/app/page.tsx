"use client";



import { IncomeFooter } from "@/components/ProductComponents/IncomeFooter";


import { ProductHeader } from "@/components/ProductComponents";

import { ProductFilter } from "@/components/ProductComponents/ProductFilter";
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
