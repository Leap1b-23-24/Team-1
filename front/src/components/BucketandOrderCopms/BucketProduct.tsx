"use client";
import { useOrder } from "@/providers/OrderProvider";
import { Delete, DeleteOutlineOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { NumericFormat } from "react-number-format";

type BucketProps = {
  image: string;
  productName: string;
  productColor: string;
  productPrice: number;
  quantity: number;
  deleteId: number;
  setDeleted: Dispatch<SetStateAction<boolean>>;
};
export const BucketProduct = (props: BucketProps) => {
  const {
    image,
    productColor,
    productName,
    productPrice,
    quantity,
    deleteId,
    setDeleted,
  } = props;

  const { setBucketAdded } = useOrder();

  const deleteFromBucket = (index: number) => {
    let raw = localStorage.getItem("bucket");
    if (raw) {
      let array = JSON.parse(raw);

      array.splice(index, 1);

      const finalArray = JSON.stringify(array);

      localStorage.setItem("bucket", finalArray);
      setDeleted((prev) => !prev);
      toast.success("Савнаас хассан");
      setBucketAdded((prev) => !prev);
    }
  };

  return (
    <Stack
      width={"100%"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      position={"relative"}
      paddingY={1}
      borderBottom={"1px solid grey"}
    >
      <Stack
        position={"absolute"}
        top={0}
        right={0}
        sx={{ cursor: "pointer" }}
        onClick={() => {
          deleteFromBucket(deleteId);
        }}
      >
        <DeleteOutlineOutlined fontSize="small" />
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} gap={2} width={"25%"}>
        <Stack
          position={"relative"}
          height={90}
          width={80}
          borderRadius={1}
          overflow={"hidden"}
        >
          <Image src={`${image}`} fill alt="" />
        </Stack>
        <Stack>
          <Typography fontSize={14} fontWeight={800} color={"#000"}>
            {productName}
          </Typography>
          <Typography fontSize={14} fontWeight={800} color={"#A1A8C1"}>
            Өнгө: {productColor}
          </Typography>
        </Stack>
      </Stack>
      <Typography
        fontSize={14}
        fontWeight={700}
        color={"#000"}
        width={"25%"}
        textAlign={"center"}
      >
        <NumericFormat
          value={productPrice}
          thousandSeparator=","
          displayType="text"
          suffix="₮"
          renderText={(value) => <b>{value}</b>}
        />
      </Typography>
      <Stack width={"25%"} alignItems={"center"} justifyContent={"center"}>
        <Stack
          flexDirection={"row"}
          width={40}
          display={"grid"}
          gridTemplateColumns={"repeat(3,1fr)"}
        >
          <Stack
            width={"100%"}
            sx={{ aspectRatio: "1/1", cursor: "pointer" }}
            fontSize={12}
            fontWeight={800}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"#BEBFC2"}
            color={"#F0EFF2"}
          >
            -
          </Stack>
          <Stack
            width={"100%"}
            sx={{ aspectRatio: "1/1" }}
            fontSize={12}
            fontWeight={800}
            alignItems={"center"}
            justifyContent={"center"}
            color={"#BEBFC2"}
            bgcolor={"#F0EFF2"}
          >
            {quantity}
          </Stack>
          <Stack
            width={"100%"}
            sx={{ aspectRatio: "1/1", cursor: "pointer" }}
            fontSize={12}
            fontWeight={800}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"#BEBFC2"}
            color={"#F0EFF2"}
          >
            +
          </Stack>
        </Stack>
      </Stack>
      <Typography
        fontSize={14}
        fontWeight={700}
        color={"#000"}
        width={"25%"}
        textAlign={"center"}
      >
        <NumericFormat
          value={productPrice * quantity}
          thousandSeparator=","
          displayType="text"
          suffix="₮"
          renderText={(value) => <b>{value}</b>}
        />
      </Typography>
    </Stack>
  );
};
