"use client";
import { ImageOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Image from "next/image";

type ProductPictureProps = {
  link: String;
  updateKey: Number;
};

export const ProductPicture = (props: ProductPictureProps) => {
  const { link, updateKey } = props;
  return (
    <Stack
      width={"100%"}
      sx={{
        position: "relative",
        aspectRatio: "1/1",
        border: "1px dashed #D6D8DB",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {link ? <Image src={`${link}`} alt="" fill /> : <ImageOutlined />}
    </Stack>
  );
};
