"use client";
import { api } from "@/common";

import {
  AddComment,
  AllComment,
  DetailedPage,
} from "@/components/userComponents";
import { ShoppingCard } from "@/components/userComponents/ShoppingCard";
import { useProduct } from "@/providers/AddproductProvider";
import { ProductType } from "@/providers/UserProvider";

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
  categoryId: string;
};

export default function productDetail() {
  const { productId } = useParams();
  if (!productId) return;

  const { getAllProducts } = useProduct();
  const [products, setProducts] = useState<ProductType>([]);

  const [productData, setProductData] = useState<DetailedType>(
    {} as DetailedType
  );
  console.log(productData, "pro");

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

  useEffect(() => {
    getAllProducts({
      setProducts: setProducts,
      quantity: 16,
      filteredByDate: false,
      isSpecial: true,
    });
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
          <Stack py={"100px"} gap={6} maxHeight={"1800px"}>
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
            <Stack
              sx={{ display: "grid", gridTemplateColumns: "repeat(4,2fr)" }}
              gap={3}
              width={"100%"}
              maxHeight={363}
            >
              {products
                .filter(
                  (item, index) =>
                    item.categoryId == productData.categoryId && index < 4
                )
                .map((product, index) => {
                  return (
                    <ShoppingCard
                      key={index}
                      productName={product.productName}
                      productPrice={product.productPrice}
                      images={product.images}
                      shopId={product.shopId}
                      productId={product._id}
                      color={product.color}
                      description={product.description}
                    />
                  );
                })}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
