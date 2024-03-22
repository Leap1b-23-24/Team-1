"use client";
import { useProduct } from "@/providers/AddproductProvider";
import {
  Check,
  CheckBoxOutlineBlankOutlined,
  CreateOutlined,
  DeleteOutline,
} from "@mui/icons-material";
import { Checkbox, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { useEffect, useState } from "react";

type AdminClothesRowType = {
  productName: string;
  productCode: string;
  categoryId: string;
  price: number;
  inStock: number;
  sold: number;
  addedDate: Date;
  image: string;
};

export const AdminClothesRow = (props: AdminClothesRowType) => {
  const {
    productName,
    productCode,
    categoryId,
    price,
    inStock,
    sold,
    addedDate,
    image,
  } = props;
  const [category, setCategory] = useState<string>("");
  const [isChecked, setChecked] = useState<boolean>(false);
  const { getSingleCategory } = useProduct();

  useEffect(() => {
    getSingleCategory(setCategory, categoryId);
  }, [categoryId]);
  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      borderBottom="solid 1px #f0f0f0"
      py={2}
      sx={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)" }}
    >
      <Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Stack
          width={20}
          height={20}
          border={2}
          borderRadius={1}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={isChecked ? "black" : "white"}
          onClick={() => {
            setChecked((prev) => !prev);
          }}
        >
          {isChecked ? (
            <Stack
              width={"80%"}
              height={"80%"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"white"}
            >
              <Check fontSize="small" />
            </Stack>
          ) : null}
        </Stack>
      </Stack>
      <Stack direction="row" gap="12px">
        <Stack
          width="40px"
          height="40px"
          borderRadius="50%"
          bgcolor="red"
          overflow="hidden"
          position={"relative"}
        >
          <Image src={`${image}`} alt="" fill />
        </Stack>
        <Stack>
          <Typography fontSize="14px" fontWeight={600}>
            {productName}
          </Typography>
          <Typography fontSize="12px" fontWeight={400} color="#3F4145">
            {productCode}
          </Typography>
        </Stack>
      </Stack>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {category}
      </Typography>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {price}₮
      </Typography>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {inStock}
      </Typography>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {sold}
      </Typography>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {format(addedDate, "yyyy-MM-dd")}
      </Typography>
      <Stack direction="row" gap={2} marginRight={2}>
        <DeleteOutline style={{ color: "#b4b4b4" }} />
        <CreateOutlined style={{ color: "#b4b4b4" }} />
      </Stack>
    </Stack>
  );
};
