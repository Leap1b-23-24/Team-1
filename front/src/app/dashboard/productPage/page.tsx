"use client";
import {
  AddProductButton,
  AdminClothesRow,
  ProductClothesRowHeader,
  ProductFilter,
} from "@/components/ProductComponents";
import { useProduct } from "@/providers/AddproductProvider";
import { ProductType } from "@/providers/UserProvider";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function productPage() {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<string>("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
  const { products, getProduct } = useProduct();

  useEffect(() => {
    getProduct(category);
  }, [category]);

  return (
    <Stack direction="row" width="100%" height={"95vh"} bgcolor={"#F7F7F8"}>
      <Stack width="100%">
        <Stack
          direction="row"
          padding={3}
          gap={4}
          borderBottom="solid 1px #b4b4b4"
        >
          <Typography fontSize="14px" fontWeight={600}>
            Бүтээгдэхүүн
          </Typography>
          <Typography fontSize="14px" fontWeight={600}>
            Ангилал
          </Typography>
        </Stack>
        <Stack padding={3} gap={3}>
          <AddProductButton />
          <ProductFilter
            setCategory={setCategory}
            category={category}
            setDate={setDate}
            date={date}
            setPrice={setPrice}
            price={price}
            setSearch={setSearch}
          />
          <Stack borderRadius="12px" bgcolor="white">
            <ProductClothesRowHeader />
            {products.map((each) => {
              const {
                productCode,
                productName,
                createdAt,
                quantity,
                soldQuantity,
                images,
                productPrice,
                categoryId,
              } = each;
              return (
                <AdminClothesRow
                  productCode={productCode}
                  productName={productName}
                  addedDate={createdAt}
                  inStock={quantity}
                  sold={soldQuantity ? soldQuantity : 0}
                  image={images[0]}
                  categoryId={categoryId}
                  price={productPrice}
                />
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
