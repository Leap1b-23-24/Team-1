import { Stack } from "@mui/material";

type DashboardProductComps = {
  number: number;
  title: string;
  quantity: number;
  price: number;
  productCode: string;
  image: string;
};

export const EachDashboardProduct = (props: DashboardProductComps) => {
  const { number, title, quantity, price, productCode, image } = props;
  return (
    <Stack
      width={"100%"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      //   sx={{ gridTemplateColumns: "repeat(4,1fr)" }}
      border={1}
    >
      <Stack width={0.5 / 5} border={1} height={30}></Stack>
      <Stack width={2 / 5} border={1} height={30}></Stack>
      <Stack width={1 / 5} border={1} height={30}></Stack>
      <Stack width={1 / 5} border={1} height={30}></Stack>
    </Stack>
  );
};
