"use client";
import { ArrowForward, Category } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { EachDashboardProduct } from "./EachDashboardProduct";
import { useEffect, useState } from "react";
import { api } from "@/common";
import { useUser } from "@/providers/UserProvider";

export const DashboardProduct = () => {
  const headers = [
    { text: "№", width: 0.5 },
    { text: "Бүтээгдэхүүн", width: 2 },
    { text: "Зарагдсан", width: 1 },
    { text: "Үнэ", width: 1 },
  ];
  const { getAdminProducts, adminProducts } = useUser();

  useEffect(() => {
    getAdminProducts("");
  }, []);
  return (
    <Stack
      width={"100%"}
      gap={3}
      padding={3}
      borderRadius={2}
      bgcolor={"white"}
      overflow={"hidden"}
    >
      <Stack
        width={"100%"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography fontSize={18} fontWeight={600}>
          Шилдэг бүтээгдэхүүн
        </Typography>
        <Stack onClick={() => {}}>
          <ArrowForward />
        </Stack>
      </Stack>
      <Stack width={"100%"}>
        <Stack
          width={"100%"}
          flexDirection={"row"}
          alignItems={"center"}
          paddingY={"14px"}
          justifyContent={"space-between"}
          bgcolor={"#D6D8DB"}
          borderBottom={"1px solid grey"}
        >
          {headers.map((each, index) => {
            return (
              <Typography
                key={index}
                width={each.width / 5}
                height={30}
                textAlign={"center"}
                fontWeight={600}
                color={"#3F4145"}
              >
                {each.text}
              </Typography>
            );
          })}
        </Stack>
        {adminProducts
          ? adminProducts.map((each, index) => {
              return (
                <EachDashboardProduct
                  key={index}
                  number={index + 1}
                  title={each.productName}
                  quantity={each.soldQuantity}
                  price={each.productPrice}
                  image={each.images[0]}
                  productCode={each.productCode}
                />
              );
            })
          : null}
      </Stack>
    </Stack>
  );
};
