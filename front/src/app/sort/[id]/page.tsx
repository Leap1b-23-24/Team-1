"use client";
import {
  AddComment,
  AllComment,
  DetailedPage,
} from "@/components/userComponents";
import { useProduct } from "@/providers/AddproductProvider";

import { Container, Stack, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SingleProduct() {
  const { id } = useParams();
  if (!id) return;

  const { singleProduct } = useProduct();

  useEffect(() => {
    // const getProduct = () => {
    //   getAllProducts({
    //     setProducts: setProducts,
    //     quantity: 16,
    //     filteredByDate: false,
    //     isSpecial: true,
    //   });
    //   const product = products.filter((item) => item._id === id);
    //   setProductData(product);
    // };
    // getProduct();
  }, [id]);

  return (
    <Stack width={"100%"}>
      <Container maxWidth="lg">
        <Stack width={"100%"}>
          <DetailedPage
            productId={singleProduct?.shopId}
            productName={singleProduct?.productName}
            productPrice={singleProduct?.productPrice}
            images={singleProduct?.images}
            shopId={singleProduct?.shopId}
            color={singleProduct?.color}
            description={singleProduct?.description}
          />
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
