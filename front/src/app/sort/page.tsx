"use client";

import { ShoppingCard } from "@/components/userComponents/ShoppingCard";
import { SortTop } from "@/components/userComponents/sort/SortTop";
import { useProduct } from "@/providers/AddproductProvider";
import { ProductType } from "@/providers/UserProvider";
import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Sort() {
  const [products, setProducts] = useState<ProductType>([]);
  const { getAllProducts } = useProduct();
  useEffect(() => {
    getAllProducts({
      quantity: 0,
      filteredByDate: false,
      isSpecial: false,
      setProducts: setProducts,
    });
  });
  return (
    <Stack width={"100vw"} gap={10}>
      <Stack
        width={"100%"}
        height={"100px"}
        justifyContent={"center"}
        bgcolor={"#F6F5FF"}
      >
        <Container maxWidth="lg">
          <Stack direction={"row"} gap={1.25}>
            <Typography fontWeight={500}>Home</Typography>
            <Typography fontWeight={500} color={"#FB2E86"}>
              Shop Left Sidebar
            </Typography>
          </Stack>
        </Container>
      </Stack>
      <Container maxWidth="lg">
        <Stack width={"100%"} gap={10}>
          <SortTop />
          <Stack
            width={"100%"}
            sx={{ display: "grid", gridTemplateColumns: "repeat(4,2fr)" }}
          >
            {products.map((item, index) => {
              return (
                <ShoppingCard
                  shopId={item.shopId}
                  productId={item._id}
                  productName={item.productName}
                  productPrice={item.productPrice}
                  color={item.color}
                  images={item.images[0]}
                />
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
