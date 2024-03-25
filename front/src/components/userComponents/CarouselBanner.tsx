import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Stack } from "@mui/material";

type slideType = {
  title: string;
  image: string;
};

type CarouselProps = {
  slides: slideType[];
};

export const Carousel = (props: CarouselProps) => {
  const { slides } = props;
  return (
    <Stack overflow={"hidden"}>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={0}
        slidesPerView={1}
        // style={{ width: "100%" }}
        style={{
          width: "100%",
          // "--swiper-pagination-color": "#FFBA08",
          // "--swiper-pagination-bullet-inactive-color": "#999999",
          // "--swiper-pagination-bullet-inactive-opacity": "1",
          // "--swiper-pagination-bullet-size": "16px",
          // "--swiper-pagination-bullet-horizontal-gap": "10px",
        }}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Stack maxHeight={"850px"}>
                <img
                  src={`${slide.image}`}
                  alt={`${slide.title}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Stack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Stack>
  );
};
