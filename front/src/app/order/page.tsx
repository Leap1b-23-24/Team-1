"use client";
import { CustomInput } from "@/components/AddProductComponents/CustomInput";
import { AddedPrice } from "@/components/BucketandOrderCopms/AddedPrice";
import { OrderProduct } from "@/components/BucketandOrderCopms/OrderProduct";
import { BucketProductType, useOrder } from "@/providers/OrderProvider";
import { Check } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Order() {
  const [contact, setContact] = useState<boolean>(false);
  const [products, setProducts] = useState<BucketProductType[]>([]);
  const { getBucketProducts } = useOrder();

  useEffect(() => {
    getBucketProducts(setProducts);
  }, []);
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingX={"90px"}
    >
      <Container maxWidth="lg">
        <Stack width={"100%"} gap={"11px"} alignItems={"flex-start"}>
          <Typography fontSize={24} fontWeight={800} color={"#1D3178"}>
            Захиалга
          </Typography>
          <Typography fontSize={12} fontWeight={500} color={"#1D3178"}>
            Cart/ Information/ Shipping/ Payment
          </Typography>
          <Stack
            width={"100%"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Stack
              width={"65%"}
              padding={"65px 45px"}
              gap={"100px"}
              borderRadius={1}
              bgcolor={"#F8F8FD"}
            >
              <Stack width={"100%"} gap={4}>
                <Typography fontSize={18} fontWeight={800} color={"#1D3178"}>
                  Холбогдох мэдээлэл
                </Typography>
                <CustomInput
                  variant="filled"
                  placeholder="Email or mobile phone number"
                />
                <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
                  <Stack
                    height={"100%"}
                    borderRadius={1}
                    onClick={() => {
                      setContact((prev) => !prev);
                    }}
                    sx={{
                      aspectRatio: "1/1",
                      bgcolor: contact ? "#19D16F" : "grey",
                    }}
                  >
                    <Check fontSize="small" />
                  </Stack>
                  <Typography fontSize={12} fontWeight={500} color={"#8A91AB"}>
                    Keep me up to date on news and excluive offers
                  </Typography>
                </Stack>
              </Stack>
              <Stack width={"100%"} gap={4}>
                <Typography fontSize={18} fontWeight={800} color={"#1D3178"}>
                  Хүргэлтийн хаяг
                </Typography>
                <Stack flexDirection={"row"} gap={2}>
                  <CustomInput variant="filled" placeholder="First name" />
                  <CustomInput
                    variant="filled"
                    placeholder="Last name (optional)"
                  />
                </Stack>
                <CustomInput variant="filled" placeholder="Address" />
                <CustomInput variant="filled" placeholder="Apartment" />
                <CustomInput variant="filled" placeholder="City" />
                <Stack flexDirection={"row"} gap={2}>
                  <CustomInput variant="filled" placeholder="Country" />
                  <CustomInput variant="filled" placeholder="Postal code" />
                </Stack>
              </Stack>
            </Stack>
            <Stack width={"30%"} gap={4}>
              <Stack width={"100%"} overflow={"scroll"} gap={2}>
                {products.map((product) => {
                  const { productColor, productName, price, image, _id } =
                    product;
                  return (
                    <OrderProduct
                      key={_id}
                      color={productColor}
                      name={productName}
                      price={price}
                      image={image[0]}
                    />
                  );
                })}
              </Stack>
              <AddedPrice />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
