"use client";
import { useProduct } from "@/providers/AddproductProvider";
import { ProductType } from "@/providers/UserProvider";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { SecondCard } from "./SecondCard";

export const SuggestingProducts = () => {
  const [products, setProducts] = useState<ProductType>([]);
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
      <Typography fontSize={30} fontWeight={800} color={"#151875"}>
        Онцлох бүтээгдэхүүн
      </Typography>
      <Stack width={"100%"} overflow={"hidden"} position={"relative"}>
        <Swiper
          className="swiper"
          modules={[Navigation, Pagination, Scrollbar]}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          spaceBetween={20}
          slidesPerView={4}
          style={{
            width: "100%",
            paddingBottom: "35px",
          }}
        >
          {products.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <SecondCard
                  key={index}
                  shopId={item.shopId}
                  productId={item._id}
                  color={item.color}
                  images={item.images[0]}
                  productName={item.productName}
                  productPrice={item.productPrice}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Stack>
    </Stack>
  );
};
