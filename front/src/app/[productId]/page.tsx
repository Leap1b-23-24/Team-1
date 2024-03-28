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

export type CommentType = {
  userName: string;
  comment: string;
  rating: number;
};

type DetailedType = {
  productId: string;
  productName: string;
  productPrice: number;
  shopId: string;
  color: string;
  description: string;
  images: string[];
  categoryId: string;
  comment: CommentType[];
};

export default function productDetail() {
  const { productId } = useParams();
  console.log(typeof productId);

  if (!productId) return;

  const { getAllProducts } = useProduct();
  const [products, setProducts] = useState<ProductType>([]);
  const [acitve, setActive] = useState(0);

  const [productData, setProductData] = useState<DetailedType>(
    {} as DetailedType
  );

  const [isLoading, setLoading] = useState(true);
  const [isCommentAdded, setIsCommentAdded] = useState(false);

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
  }, [isCommentAdded]);

  useEffect(() => {
    getAllProducts({
      setProducts: setProducts,
      quantity: 16,
      filteredByDate: false,
      isSpecial: true,
    });
  }, []);

  const checkActive = () => {
    if (acitve == 0) {
      return (
        <Stack gap={1}>
          <Typography color={"#151875"} fontSize={22} fontWeight={800}>
            {"Varius tempor."}
          </Typography>
          <Typography color={"#A9ACC6"} fontSize={16} fontWeight={800}>
            {
              "Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr ."
            }
          </Typography>
        </Stack>
      );
    } else {
      return (
        <Stack gap={3}>
          <AddComment
            isCommentAdded={isCommentAdded}
            setIsCommentAdded={setIsCommentAdded}
            productId={productId}
          />
          <AllComment
            isCommentAdded={isCommentAdded}
            comments={productData.comment}
          />
        </Stack>
      );
    }
  };

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
              <Typography
                color={"#151875"}
                fontWeight={800}
                fontSize={"24px"}
                onClick={() => setActive(0)}
                sx={{ textDecoration: `${acitve == 0 ? "underline" : null}` }}
              >
                {"Нэмэлт мэдээлэл"}
              </Typography>
              <Typography
                color={"#151875"}
                fontWeight={800}
                fontSize={"24px"}
                onClick={() => setActive(1)}
                sx={{ textDecoration: `${acitve == 1 ? "underline" : null}` }}
              >
                {"Үнэлгээ"}
              </Typography>
            </Stack>
            {checkActive()}
          </Stack>
          {isLoading ? null : (
            <Stack py={"100px"} gap={6}>
              <Stack direction={"row"} gap={3}>
                <Typography
                  color={"#151875"}
                  fontWeight={800}
                  fontSize={"24px"}
                >
                  {"Нэмэлт мэдээлэл"}
                </Typography>
                <Typography
                  color={"#151875"}
                  fontWeight={800}
                  fontSize={"24px"}
                >
                  {"Үнэлгээ"}
                </Typography>
              </Stack>
              <AddComment
                productId={productId}
                isCommentAdded={isCommentAdded}
                setIsCommentAdded={setIsCommentAdded}
              />
              <AllComment
                comments={productData.comment}
                isCommentAdded={isCommentAdded}
              />
            </Stack>
          )}
        </Container>
      </Stack>
      <Stack width={"100%"} paddingTop={"130px"}>
        <Container maxWidth="lg">
          <Stack width={"100%"} gap={6}>
            <Typography color={"#101750"} fontSize={"36px"} fontWeight={800}>
              {"Холбоотой бүтээгдэхүүн"}
            </Typography>
            <Stack
              sx={{ display: "grid", gridTemplateColumns: "repeat(4,2fr)" }}
              gap={3}
              width={"100%"}
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
