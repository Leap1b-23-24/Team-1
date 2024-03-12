import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export type ShoppingCardProps = {
  image: string;
  title: string;
  description: string;
  price: number;
};

export const ShoppingCard = (props: ShoppingCardProps) => {
  const { image, title, description, price } = props;
  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      bgcolor={"#FFFFFF"}
      borderRadius={3}
      overflow={"hidden"}
      border={"1px solid grey"}
    >
      <Stack width={"100%"} sx={{ aspectRatio: "1/1" }} position={"relative"}>
        <Image src={image} alt="" fill />
      </Stack>
      <Stack width={"100%"} padding={3} gap={"12px"}>
        <Typography fontSize={20} fontWeight={700} color={"#121316"}>
          {title}
        </Typography>
        <Typography fontSize={16} color={"#121316"}>
          {description}
        </Typography>
        <Typography
          fontSize={24}
          fontWeight={700}
          color={"#121316"}
          alignSelf={"flex-end"}
        >
          {price} ₮
        </Typography>
      </Stack>
    </Stack>
  );
};
