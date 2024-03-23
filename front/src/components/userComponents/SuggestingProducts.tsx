"use client";
import { useProduct } from "@/providers/AddproductProvider";
import { ProductType } from "@/providers/UserProvider";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ShoppingCard } from "./ShoppingCard";

export const SuggestingProducts = () => {
  const [products, setProducts] = useState<ProductType>([]);
  const [slider, setSlider] = useState<number>(0);
  const { getAllProducts } = useProduct();
  useEffect(() => {
    getAllProducts({
      setProducts: setProducts,
      quantity: 16,
      filteredByDate: false,
      isSpecial: true,
    });
  }, []);
  return (
    <Stack width={"100%"} alignItems={"center"} gap={5}>
      <Typography fontSize={30} fontWeight={800} color={"#1A0B5B"}>
        Онцлох бүтээгдэхүүн
      </Typography>
      <Stack width={"100%"} overflow={"hidden"} position={"relative"}>
        <Stack width={"100%"} flexDirection={"row"}>
          {products.map((item, index) => {
            return (
              <ShoppingCard
                key={index}
                images={item.images[0]}
                productName={item.productName}
                productPrice={item.productPrice}
              />
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};
