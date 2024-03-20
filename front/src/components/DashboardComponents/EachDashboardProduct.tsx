import { Hidden, Stack, Typography } from "@mui/material";
import Image from "next/image";

type DashboardProductComps = {
  number: number;
  title: string;
  quantity?: number;
  price: number;
  productCode: string;
  image: string;
};

export const EachDashboardProduct = (props: DashboardProductComps) => {
  const { number, title, quantity = 0, price, productCode, image } = props;
  return (
    <Stack
      width={"100%"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottom={"1px solid #ECEDF0"}
      paddingY={2}
    >
      <Stack width={0.5 / 5} justifyContent={"center"} alignItems={"center"}>
        <Typography color={"#121316"}>{number}</Typography>
      </Stack>
      <Stack
        width={2 / 5}
        flexDirection={"row"}
        gap={2}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Stack
          width={40}
          sx={{
            aspectRatio: "1/1",
            borderRadius: "50%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image fill alt="" src={`${image}`} />
        </Stack>
        <Stack justifyContent={"space-between"}>
          <Typography fontSize={14} fontWeight={600} color={"#121316"}>
            {title}
          </Typography>
          <Typography color={"#3F4145"}>{productCode}</Typography>
        </Stack>
      </Stack>
      <Stack
        width={1 / 5}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={600}
      >
        {quantity}
      </Stack>
      <Stack
        width={1 / 5}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={600}
      >
        {price} ₮
      </Stack>
    </Stack>
  );
};
