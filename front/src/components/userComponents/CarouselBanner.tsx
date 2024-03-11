import { Slide, Stack } from "@mui/material";
import Image from "next/image";

const images = [
  "vercel.svg",

  "next.svg",

  //   "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",

  //   "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
];

export const CarouselBanner = () => {
  return (
    <Stack width={"100%"} overflow={"hidden"}>
      {images.map((item, index) => {
        return (
          <Stack
            direction={"row"}
            key={index}
            width={"200%"}
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
