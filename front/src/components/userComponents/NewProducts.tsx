"use client";
import { Stack, Typography } from "@mui/material";
import { ShoppingCard } from "./ShoppingCard";
import { useEffect, useState } from "react";
import { useProduct } from "@/providers/AddproductProvider";
import { ProductType } from "@/providers/UserProvider";

export const NewProducts = () => {
  const [products, setProducts] = useState<ProductType>([]);
  const { getAllProducts } = useProduct();
  useEffect(() => {
    getAllProducts({
      setProducts: setProducts,
      quantity: 8,
      filteredByDate: true,
      isSpecial: false,
    });
  }, []);

  return (
    <Stack
      width={"100%"}
      gap={3}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography color={"#151875"} fontSize={28} fontWeight={700}>
        Шинээр нэмэгдсэн
      </Typography>
      <Stack
        width={"100%"}
        sx={{ display: "grid", gridTemplateColumns: "repeat(4,2fr)" }}
        gap={3}
      >
        {products?.map((item, index) => {
          if (index < 8)
            return (
              <ShoppingCard
                key={index}
                shopId={item.shopId}
                productId={item._id}
                color={item.color}
                images={item.images}
                productName={item.productName}
                productPrice={item.productPrice}
                description={item.description}
              />
            );
        })}
      </Stack>
    </Stack>
  );
};
