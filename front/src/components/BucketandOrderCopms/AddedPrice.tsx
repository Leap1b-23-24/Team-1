"use client";
import { BucketProductType } from "@/providers/OrderProvider";
import { Stack, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const AddedPrice = (props: { productChanged?: boolean }) => {
  const [addedPrice, setAddedPrice] = useState<number>(0);
  const [productiD, setProductId] = useState<string[]>([]);
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    let raw = localStorage.getItem("bucket");
    if (raw) {
      let products: BucketProductType[] = JSON.parse(raw);
      setAddedPrice(0);
      setProductId([]);
      products.forEach((each) => {
        setAddedPrice((prev) => (prev += each.price));
        setProductId([...productiD, each._id]);
      });
    }
  }, [props.productChanged]);

  return (
    <Stack width={"100%"}>
      <Typography fontSize={20} fontWeight={800} color={"#1D3178"}>
        Нийт төлөх
      </Typography>
      <Stack
        borderRadius={1}
        width={"100%"}
        gap={2}
        bgcolor={"#F4F4FC"}
        padding={"30px"}
      >
        <Stack
          width={"100%"}
          flexDirection={"row"}
          paddingY={"10px"}
          justifyContent={"space-between"}
          borderBottom={"2px solid #E8E6F1"}
        >
          <Typography fontSize={18} fontWeight={500} color={"#1D3178"}>
            Нийлбэр:
          </Typography>
          <Typography fontSize={18} fontWeight={600} color={"#1D3178"}>
            {addedPrice} ₮
          </Typography>
        </Stack>
        <Stack
          width={"100%"}
          flexDirection={"row"}
          paddingY={"10px"}
          justifyContent={"space-between"}
          borderBottom={"2px solid #E8E6F1"}
        >
          <Typography fontSize={18} fontWeight={500} color={"#1D3178"}>
            Төлөх дүн:
          </Typography>
          <Typography fontSize={18} fontWeight={600} color={"#1D3178"}>
            {addedPrice} ₮
          </Typography>
        </Stack>
        <Typography
          color={"white"}
          bgcolor={"#19D16F"}
          paddingY={"11px"}
          width={"100%"}
          textAlign={"center"}
          borderRadius={1}
          fontWeight={700}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            pathName.includes("bucket")
              ? router.push("/order")
              : console.log(productiD);
          }}
        >
          Худалдан авах
        </Typography>
      </Stack>{" "}
    </Stack>
  );
};
