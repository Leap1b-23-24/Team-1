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
import { useEffect, useState } from "react";
import { IncomeFooterTopCom } from "@/components/ProductComponents/income";
import DeliveryInformation from "@/components/ProductComponents/DeliveryInformation";
import DashboardInformation from "@/components/ProductComponents/DashboardInfo";
import { BarChartContainer } from "@/components/ProductComponents/ChartOptions";
import { SalesBarChart } from "@/components/ProductComponents/SellBar";
import {
  Footer,
  ServiceCards,
  UnderHeader,
  WholeHeader,
} from "@/components/userComponents";
import { ShoppingCard } from "@/components/userComponents/ShoppingCard";
import { Container, Typography } from "@mui/material";
import { useProduct } from "@/providers/AddproductProvider";
import { Carousel } from "@/components/userComponents/CarouselBanner";

const slides = [
  { image: "/ads1xbet.webp", title: "1xbet" },
  { image: "/adsCoke.jpeg", title: "Coke" },
  { image: "/adsVape.jpg", title: "Vape" },
];

export default function Home() {
  const { getAllProducts, products, allProducts } = useProduct();
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Stack width={"100vw"} gap={4} alignItems={"center"} bgcolor={"#F7F7F8"}>
      <WholeHeader />
      {/* Main Container */}
      <Container maxWidth="lg">
        <Stack width={"100%"} gap={4} border={"1px solid red"} padding={1}>
          {/* carousel container */}
          <Stack width={"100%"} height={557} border={"1px solid black"}>
            {/* <Typography color={"black"}>Carousel container</Typography> */}
            <Carousel slides={slides} />
          </Stack>
          {/* Suggest container */}
          <Stack
            width={"100%"}
            border={"1px solid purple"}
            gap={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography color={"#151875"} fontSize={28} fontWeight={700}>
              Шинээр нэмэгдсэн{" "}
            </Typography>
            <Stack
              width={"100%"}
              sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
              gap={2}
            >
              {allProducts?.map((item, index) => {
                if (index < 8)
                  return (
                    <Grid item xs={3} key={index}>
                      <Stack width={270}>
                        <ShoppingCard
                          images={item.images[0]}
                          productName={item.productName}
                          productPrice={item.productPrice}
                        />
                      </Stack>
                    </Grid>
                  );
              })}
            </Stack>
          </Stack>
        </Stack>
        <ServiceCards />
      </Container>
      <Footer />
    </Stack>
  );
}
