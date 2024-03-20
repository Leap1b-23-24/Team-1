"use client";
import { ImageOutlined } from "@mui/icons-material";
import { CircularProgress, Stack } from "@mui/material";
import Image from "next/image";

type ProductPictureProps = {
  link: String;
  updateKey: Number;
};

export const ProductPicture = (props: ProductPictureProps) => {
  const { link } = props;
  return (
    <Stack
      width={"100%"}
      sx={{
        position: "relative",
        aspectRatio: "1/1",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {link ? <Image src={`${link}`} alt="" fill /> : <CircularProgress />}
    </Stack>
  );
};
