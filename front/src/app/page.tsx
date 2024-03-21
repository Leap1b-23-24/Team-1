
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
import { Footer } from "@/components/userComponents";

import FooterPart from "@/components/userComponents/Footer";
import { Header } from "@/components/userComponents/Header";
import { ShoppingCard } from "@/components/userComponents/ShoppingCard";
import { Container, Stack, Typography } from "@mui/material";


export default function Home() {
  return (
    <Stack width={"100vw"} gap={4} alignItems={"center"} bgcolor={"#F7F7F8"}>
      <Header />
      {/* Main Container */}
      <Container maxWidth="lg">
        <Stack width={"100%"} gap={4} border={"1px solid red"} padding={1}>
          {/* carousel container */}
          <Stack width={"100%"} height={557} border={"1px solid black"}>
            <Typography color={"black"}>Carousel container</Typography>
          </Stack>
          {/* Suggest container */}
          <Stack width={"100%"} border={"1px solid purple"} gap={3}>
            <Typography color={"#121316"} fontSize={28} fontWeight={700}>
              Санал болгож буй
            </Typography>
            <Stack
              width={"100%"}
              sx={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}
              gap={2}
            >
              <ShoppingCard
                image="/tshirt.jpeg"
                title="Guess цахилгаант цамц"
                price={58000}
                description="Чөлөөт цамц"
              />
              <ShoppingCard
                image="/tshirt.jpeg"
                title="Guess цахилгаант цамц"
                price={58000}
                description="Чөлөөт цамц"
              />
              <ShoppingCard
                image="/tshirt.jpeg"
                title="Guess цахилгаант цамц"
                price={58000}
                description="Чөлөөт цамц"
              />
              <ShoppingCard
                image="/tshirt.jpeg"
                title="Guess цахилгаант цамц"
                price={58000}
                description="Чөлөөт цамц"
              />
              <ShoppingCard
                image="/tshirt.jpeg"
                title="Guess цахилгаант цамц"
                price={58000}
                description="Чөлөөт цамц"
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>


      <ProductCard
        productId={34}
        productName="horsebit"
        productPrice={58000}
        productQuantity={2}
        date="2024-03-02"
        totalPrice={580000}
      />
      <PaymentInformation />
      <DashboardInformation name="Орлого" number={235000} />
      <Footer />
    </>

      <FooterPart />
    </Stack>

  );
}
