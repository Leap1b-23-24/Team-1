"use client";
import {
  AddProductButton,
  AdminClothesRow,
  ProductClothesRowHeader,
  ProductFilter,
  ProductSideBar,
} from "@/components/ProductComponents";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function productPage() {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");

  return (
    <Stack direction="row" width="100%">
      <ProductSideBar />
      <Stack width="100%" bgcolor="#ECEDF0">
        <Stack
          direction="row"
          padding={3}
          gap={4}
          borderBottom="solid 1px #b4b4b4"
        >
          <Typography fontSize="14px" fontWeight={600}>
            Бүтээгдэхүүн
          </Typography>
          <Typography fontSize="14px" fontWeight={600}>
            Ангилал
          </Typography>
        </Stack>
        <Stack padding={3} gap={3}>
          <AddProductButton />
          <ProductFilter
            setCategory={setCategory}
            setDate={setDate}
            setPrice={setPrice}
            setSearch={setSearch}
          />
          <Stack borderRadius="12px" bgcolor="white">
            <ProductClothesRowHeader />
            <AdminClothesRow
              priority={23}
              productName="bag"
              category="bag"
              price={345000}
              arrearage={89}
              sold={809}
              addedDate="2024-03-12"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
