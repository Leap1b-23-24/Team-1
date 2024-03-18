"use client";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const AddProductButton = () => {
  const router = useRouter();
  return (
    <Stack
      bgcolor={"#121316"}
      width={"280px"}
      height={"48px"}
      borderRadius={"8px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button
        onClick={() => {
          router.push("/dashboard/addProduct");
        }}
        sx={{ gap: "8px", display: "flex", alignItems: "center" }}
      >
        <Typography color={"#FFFFFF"}>+</Typography>{" "}
        <Typography color={"#FFFFFF"}>Бүтээгдэхүүн нэмэх</Typography>{" "}
      </Button>
    </Stack>
  );
};
