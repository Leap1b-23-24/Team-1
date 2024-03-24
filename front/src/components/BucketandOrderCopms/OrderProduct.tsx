import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type OrderProductProps = {
  name: string;
  image: string;
  color: string;
  price: number;
};

export const OrderProduct = (props: OrderProductProps) => {
  const { name, price, color, image } = props;
  return (
    <Stack
      width={"100%"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      paddingBottom={1}
      borderBottom={"1px solid #E1E1E4"}
    >
      <Stack flexDirection={"row"} alignItems={"flex-start"} gap={2}>
        <Stack
          height={90}
          width={80}
          position={"relative"}
          overflow={"hidden"}
          borderRadius={1}
        >
          <Image src={`${image}`} alt="" fill />
        </Stack>
        <Stack gap={1}>
          <Typography fontSize={14} fontWeight={800}>
            {name}
          </Typography>
          <Typography fontSize={12} fontWeight={800} color={"#A1A8C1"}>
            Өнгө: {color}
          </Typography>
        </Stack>
      </Stack>
      <Typography fontSize={14} fontWeight={700} color={"#151875"}>
        {price} ₮
      </Typography>
    </Stack>
  );
};
