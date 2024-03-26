"use client";

import { ShoppingCard } from "@/components/userComponents/ShoppingCard";
import { SortTop } from "@/components/userComponents/sort/SortTop";
import { SorttingCard } from "@/components/userComponents/sort/SortingCard";
import { useProduct } from "@/providers/AddproductProvider";
import { ProductType } from "@/providers/UserProvider";
import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Sort() {
  const [products, setProducts] = useState<ProductType>([]);
  const [isWindow, setIsWindow] = useState(true);
  const { getAllProducts, searchValue } = useProduct();

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
          <SortTop setIsWindow={setIsWindow} />
          <Stack
            width={"100%"}
            sx={{
              display: "grid",
              gridTemplateColumns: isWindow ? "repeat(4,2fr)" : "repeat(1,5fr)",
              gap: "36px",
            }}
          >
            {products
              .filter(
                (item) =>
                  item.productName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  item.description
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
              )
              .map((item, index) => {
                return isWindow ? (
                  <ShoppingCard
                    shopId={item.shopId}
                    productId={item._id}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    color={item.color}
                    images={item.images[0]}
                    description={item.description}
                  />
                ) : (
                  <SorttingCard
                    shopId={item.shopId}
                    productId={item._id}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    color={item.color}
                    images={item.images[0]}
                    description={item.description}
                  />
                );
              })}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
