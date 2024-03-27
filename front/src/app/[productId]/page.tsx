"use client";
import { api } from "@/common";
import { ProductCardType } from "@/components/ProductComponents";
import {
  AddComment,
  AllComment,
  DetailedPage,
} from "@/components/userComponents";
import { ShoppingCardProps } from "@/components/userComponents/SecondCard";

import { CircularProgress, Container, Stack, Typography } from "@mui/material";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type DetailedType = {
  productId: string;
  productName: string;
  productPrice: number;
  shopId: string;
  color: string;
  description: string;
  images: string[];
};

export default function productDetail() {
  const { productId } = useParams();
  if (!productId) return;

  const [productData, setProductData] = useState<DetailedType>(
    {} as DetailedType
  );
  const [isLoading, setLoading] = useState(true);

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const { data } = await api.post("/singleProduct/", {
        productId,
      });
      setProductData(data.singleProduct);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <Stack width={"100%"}>
      <Container maxWidth="lg">
        <Stack width={"100%"}>
          {isLoading ? (
            <Stack
              width={"100%"}
              height={400}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CircularProgress />
            </Stack>
          ) : (
            <DetailedPage
              productId={productData.productId}
              productName={productData.productName}
              productPrice={productData.productPrice}
              images={productData.images}
              shopId={productData.shopId}
              color={productData.color}
              description={productData.description}
            />
          )}
        </Stack>
      </Container>
      <Stack width={"100%"} bgcolor={"#F9F8FE"}>
        <Container maxWidth={"lg"}>
          <Stack py={"100px"} gap={6}>
            <Stack direction={"row"} gap={3}>
              <Typography color={"#151875"} fontWeight={800} fontSize={"24px"}>
                {"Нэмэлт мэдээлэл"}
              </Typography>
              <Typography color={"#151875"} fontWeight={800} fontSize={"24px"}>
                {"Үнэлгээ"}
              </Typography>
            </Stack>
            <AddComment />
            <AllComment />
          </Stack>
        </Container>
      </Stack>
      <Stack width={"100%"} py={"130px"}>
        <Container maxWidth="lg">
          <Stack width={"100%"} gap={6}>
            <Typography color={"#101750"} fontSize={"36px"} fontWeight={800}>
              {"Холбоотой бүтээгдэхүүн"}
            </Typography>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
