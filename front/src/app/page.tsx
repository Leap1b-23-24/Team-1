"use client";
import { AddProduct } from "@/components/AddProductComponents/AddProduct";
import { AddProductContainer } from "@/components/AddProductComponents/AddProductContainer";
import { CustomInput } from "@/components/AddProductComponents/CustomInput";
import { ProductFilter } from "@/components/ProductComponents/ProductFilter";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Stack bgcolor={"#F7F7F8"}>
        <AddProduct />
      </Stack>
    </>
  );
}
