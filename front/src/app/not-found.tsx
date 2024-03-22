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
import { Footer, UnderHeader, WholeHeader } from "@/components/userComponents";
import { ShoppingCard } from "@/components/userComponents/ShoppingCard";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <Stack width={"100vw"} gap={4} alignItems={"center"} bgcolor={"#F7F7F8"}>
      <WholeHeader />
      <Container maxWidth="lg">
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Image
            src={"/Group 123.png"}
            alt="eeqwqw"
            width={1020}
            height={644}
          ></Image>
          <Stack
            bgcolor={"#FB2E86"}
            width={165}
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
            borderRadius={"3px"}
            onClick={() => {
              router.push("/");
            }}
          >
            <Typography color={"#FFFFFF"} fontWeight={800} fontSize={16}>
              Back To Home
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
