"use client";

import { Stack } from "@mui/material";
import { ServiceCards } from "@/components/userComponents";
import { Container } from "@mui/material";
import { Carousel } from "@/components/userComponents/CarouselBanner";
import { NewProducts } from "@/components/userComponents/NewProducts";
import { SuggestingProducts } from "@/components/userComponents/SuggestingProducts";

const slides = [
  { image: "/ads1xbet.webp", title: "1xbet" },
  { image: "/adsCoke.jpeg", title: "Coke" },
  { image: "/adsVape.jpg", title: "Vape" },
];

export default function Home() {
  return (
    <Stack width={"100vw"} alignItems={"center"} bgcolor={"white"}>
      {/* Main Container */}
      <Stack width={"100%"} gap={20}>
        {/* carousel container */}
        <Stack width={"100%"} height={557}>
          <Carousel slides={slides} />
        </Stack>
        {/* Suggest container */}
        <Container maxWidth="lg">
          <Stack width={"100%"} alignItems={"center"} gap={10}>
            <SuggestingProducts />
            <NewProducts />
            <ServiceCards />
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
