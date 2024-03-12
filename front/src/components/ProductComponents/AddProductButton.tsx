import { Button, Stack, Typography } from "@mui/material";
export const AddProductButton = () => {
  return (
    <Stack
      bgcolor={"#121316"}
      width={"280px"}
      height={"48px"}
      borderRadius={"8px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button sx={{ gap: "8px", display: "flex", alignItems: "center" }}>
        <Typography color={"#FFFFFF"}>+</Typography>{" "}
        <Typography color={"#FFFFFF"}>Бүтээгдэхүүн нэмэх</Typography>{" "}
      </Button>
    </Stack>
  );
};
