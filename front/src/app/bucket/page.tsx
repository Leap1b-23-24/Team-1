"use client";
import { BucketHeader } from "@/components/BucketandOrderCopms/BucketHeader";
import { BucketProduct } from "@/components/BucketandOrderCopms/BucketProduct";
import { BucketProductType, useOrder } from "@/providers/OrderProvider";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Bucket() {
  const { getBucketProducts } = useOrder();
  const [products, setProducts] = useState<BucketProductType[]>([]);
  const [isDeleted, setDeleted] = useState<boolean>(false);
  const [addedPrice, setAddedPrice] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    getBucketProducts(setProducts);
    calculatePrice(products);
  }, [isDeleted]);

  const calculatePrice = (products: BucketProductType[]) => {
    let price = 0;

    products.forEach((each) => {
      setAddedPrice((price += each.price));
    });
  };

  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"white"}>
      <Container maxWidth={"lg"}>
        <Stack
          width={"100%"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          {products.length === 0 ? (
            <Stack
              width={"100%"}
              height={300}
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
            >
              <Typography fontSize={20} fontWeight={600}>
                Таны худалдааны карт хоосон байна !
              </Typography>
              <Typography
                padding={"10px 24px"}
                color={"white"}
                sx={{ cursor: "pointer" }}
                fontSize={16}
                fontWeight={700}
                bgcolor={"#7E33E0"}
                borderRadius={1}
                onClick={() => {
                  router.push("/");
                }}
              >
                Нүүр хуудас руу буцах
              </Typography>
            </Stack>
          ) : (
            <>
              <Stack width={"65%"} gap={5}>
                <BucketHeader />
                {products.map((product, index) => {
                  const {
                    price,
                    image,
                    productColor,
                    productName,
                    quantity,
                    _id,
                  } = product;
                  return (
                    <BucketProduct
                      key={_id}
                      setDeleted={setDeleted}
                      deleteId={index}
                      productPrice={price}
                      image={image}
                      productColor={productColor}
                      productName={productName}
                      quantity={quantity}
                    />
                  );
                })}
              </Stack>
              <Stack
                width={"30%"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={5}
              >
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
                    <Typography
                      fontSize={18}
                      fontWeight={500}
                      color={"#1D3178"}
                    >
                      Нийлбэр:
                    </Typography>
                    <Typography
                      fontSize={18}
                      fontWeight={600}
                      color={"#1D3178"}
                    >
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
                    <Typography
                      fontSize={18}
                      fontWeight={500}
                      color={"#1D3178"}
                    >
                      Төлөх дүн:
                    </Typography>
                    <Typography
                      fontSize={18}
                      fontWeight={600}
                      color={"#1D3178"}
                    >
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
                  >
                    Худалдан авах
                  </Typography>
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
      </Container>
    </Stack>
  );
}
