"use client";

import {
  IncomeHeaderButton,
  PaymentInformation,
  buttonNames,
} from "@/components/ProductComponents";
import DeliveryInformation from "@/components/ProductComponents/DeliveryInformation";
import BasicTable from "@/components/ProductComponents/OrderTable";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";
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
    <Stack width="100%" bgcolor="#ECEDF0">
      <Stack width="100%" direction="row" borderBottom={"1px solid #D6D8DB"}>
        {mapBarMenu.map((word, index) => {
          return (
            <Stack
              key={index}
              padding={2}
              borderBottom={pathName == word ? "solid 1px black" : ""}
              color={pathName == word ? "#121316" : "#3F4145"}
            >
              {word}
            </Stack>
          );
        })}
      </Stack>
      <Stack p={"34px 24px"} gap={3}>
        {/* <Stack>
          {buttonNames.map((item)=>{
            return (
                <IncomeHeaderButton/>
            )
          })}
        </Stack> */}
        <BasicTable />
      </Stack>
    </Stack>
  );
}
