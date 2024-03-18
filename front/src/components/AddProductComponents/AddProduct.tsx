"use client";
import { Button, Stack } from "@mui/material";
import { AddProductContainer } from "./AddProductContainer";
import { CustomInput } from "./CustomInput";
import { AddPicture } from "./AddPicture";
import { AddCategory } from "./AddCategory";
import { useState } from "react";

export const AddProductComp = () => {
  const [imageLinks, setImageLink] = useState<{ link: string }[]>([
    { link: "" },
    { link: "" },
    { link: "" },
  ]);
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      gap={2}
      padding={3}
      alignItems={"flex-end"}
      bgcolor={"#F7F7F8"}
    >
      <Stack
        width={"100%"}
        flexDirection={"row"}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "26px",
        }}
      >
        {/* Left Side */}
        <Stack
          width={"100%"}
          height={"100%"}
          gap={3}
          justifyContent={"space-between"}
        >
          <AddProductContainer flexDirection="column">
            <CustomInput
              placeholder="Нэр"
              type="text"
              label="Бүтээгдэхүүний нэр"
            />
            <CustomInput
              placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
              type="text"
              label="Нэмэлт мэдээлэл"
            />
            <CustomInput
              placeholder="#12345678"
              type="text"
              label="Барааны код"
            />
          </AddProductContainer>
          <AddProductContainer flexDirection="row">
            <AddPicture setLink={setImageLink} links={imageLinks} />
          </AddProductContainer>
          <AddProductContainer flexDirection="row">
            <CustomInput
              placeholder="Үндсэн үнэ"
              type="number"
              label="Үндсэн үнэ"
            />
            <CustomInput
              placeholder="Үлдэгдэл тоо ширхэг"
              type="number"
              label="Үлдэгдэл тоо ширхэг"
            />
          </AddProductContainer>
        </Stack>
        {/* Right Side */}
        <Stack
          width={"100%"}
          height={"100%"}
          gap={3}
          justifyContent={"space-between"}
        >
          <AddProductContainer flexDirection="column">
            <CustomInput
              placeholder="Ерөнхий ангилал"
              type="select"
              label="Сонгох"
            />
            <CustomInput
              placeholder="Дэд ангилал"
              type="select"
              label="Сонгох"
            />
          </AddProductContainer>
          <AddProductContainer flexDirection="row">
            <AddCategory />
          </AddProductContainer>
          <AddProductContainer flexDirection="column">
            <CustomInput
              placeholder="Таг нэмэх..."
              type="text"
              label="Таг"
              helperText="Санал болгох: Гутал , Цүнх , Эмэгтэй "
            />
          </AddProductContainer>
        </Stack>
      </Stack>
      <Stack gap={3} flexDirection={"row"}>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          sx={{
            flexDirection: "row",
            color: "primary",
            paddingX: "13px",
            fontSize: "16px",
            fontWeight: "550",
            border: "1px solid #D6D8DB",
          }}
        >
          Ноорог
        </Button>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          sx={{
            paddingX: "10px",
            fontSize: "16px",
            fontWeight: "550",
          }}
        >
          Нийтлэх
        </Button>
      </Stack>
    </Stack>
  );
};
