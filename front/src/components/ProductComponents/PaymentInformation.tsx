"use client";
import { LocalShippingOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { ProductCardType } from ".";

export const PaymentInformation = () => {
  const [totalPrice, setTotalPrice] = useState(807800);
  const [chosenClothes, setChosenClothes] = useState<[]>([]);
  return (
    <Stack borderRadius="12px" border="solid 1px #ECEDF0" width="100%">
      <Stack
        borderBottom="1px solid #ECEDF0"
        px={3}
        py="20px"
        fontSize="16px"
        fontWeight={400}
      >
        {"Төлбөрийн мэдээлэл"}
      </Stack>
      <Stack padding={3}>
        <Stack borderBottom="solid 1px #ECEDF0" gap={2}>
          <Typography fontSize="16px" fontWeight={400} color="#3F4145">
            {"Бүтээгдэхүүн"}
          </Typography>
          <Stack>
            {chosenClothes.map((data: ProductCardType, index) => {
              return (
                <ProductRow
                  key={index}
                  productName={data.productName}
                  productQuantity={data.productQuantity}
                  productPrice={data.productPrice}
                />
              );
            })}
          </Stack>
          <Stack direction="row" width="100%">
            <Typography
              fontSize="14px"
              fontWeight={600}
              width="50%"
              color="#3F4145"
              marginBottom={4}
            >
              {" Хүргэлт"}
            </Typography>

            <Stack width="25%">
              <LocalShippingOutlined />
            </Stack>
            <Typography width="25%" display="flex" justifyContent="flex-end">
              {"5000"}₮
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between" paddingTop={2}>
          <Typography fontSize="16px" fontWeight={600} color="primary">
            {"Нийт төлсөн дүн"}
          </Typography>
          <Typography fontSize="18px" fontWeight={600} color="primary">
            {totalPrice}₮
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
export const ProductRow = (props: ProductCardType) => {
  const { productName, productQuantity, productPrice } = props;
  return (
    <Stack direction="row" width="100%">
      <Typography width="50%" fontWeight={600} fontSize="14px" color="#3F4145">
        {productName}
      </Typography>
      <Typography width="25%" fontWeight={600} fontSize="14px" color="#3F4145">
        *{productQuantity}
      </Typography>
      <Typography
        width="25%"
        fontWeight={600}
        fontSize="14px"
        color="#3F4145"
        display="flex"
        justifyContent="flex-end"
      >
        {productPrice}
      </Typography>
    </Stack>
  );
};
