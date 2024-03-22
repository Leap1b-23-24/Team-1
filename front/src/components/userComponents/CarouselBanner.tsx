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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ width: "100%" }}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Stack maxWidth={"1280px"} maxHeight={"800px"}>
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
