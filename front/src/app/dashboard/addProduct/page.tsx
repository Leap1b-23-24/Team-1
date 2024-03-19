import { AddProductComp } from "@/components/AddProductComponents/AddProduct";
import { ArrowBackIosOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export default function AddProduct() {
  return (
    <Stack width={"100%"} height={"95vh"}>
      <Stack direction="row" py={2} gap={3} px={3}>
        <ArrowBackIosOutlined />
        <Typography fontWeight={400} fontSize={"16px"}>
          {"Бүтээгдэхүүн нэмэх"}
        </Typography>
      </Stack>
      <AddProductComp />
    </Stack>
  );
}
