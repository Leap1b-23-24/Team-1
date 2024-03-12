import {  Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/image 109.svg",

  "/image 110.svg",
];



export const CarouselBanner = () => {
  const [page, setPage] = useState(1);

  return (
    <Stack width={"100%"} overflow={"scroll"} sx={{cursor:'grab', active:"cursor-grabbing", MozWindowDragging:"drag", }} borderRadius={2}>
      {images.map((item, index) => {
        return (
          <Stack
            direction={"row"}
            key={index}
            width={"100%"}
            height={557}
            position={"relative"}

          >
            <Image src={item} fill alt="" objectFit="cover" />
          </Stack>
        );
      })}
    </Stack>
  );
};
