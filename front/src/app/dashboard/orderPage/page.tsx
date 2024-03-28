"use client";
import { OrderTable } from "@/components/ProductComponents/orderComps/OrderTable";
import { Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

const mapBarMenu = [
  "Бүгд",
  "Шинэ захиалага",
  "Бэлтгэгдэж байна",
  "Хүргэлтэнд гарсан",
  "Хүргэгдсэн",
  "Цуцлагдсан",
];

export default function OrderPage() {
  const pathName = usePathname();
  return (
    <Stack width="100%" bgcolor="#F7F7F8" height={"95vh"}>
      <Stack width="100%" direction="row" borderBottom={"1px solid #D6D8DB"}>
        {mapBarMenu.map((word, index) => {
          return (
            <Stack
              key={index}
              padding={2}
              borderBottom={pathName == word ? "solid 1px black" : ""}
              color={pathName == word ? "#121316" : "#3F4145"}
            >
              <Typography
                sx={{ cursor: "pointer" }}
                fontSize={16}
                fontWeight={600}
              >
                {word}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
      <Stack p={"34px 24px"} height={"100%"}>
        <OrderTable />
      </Stack>
    </Stack>
  );
}
