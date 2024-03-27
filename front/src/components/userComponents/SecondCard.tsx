"use client";
import { useProduct } from "@/providers/AddproductProvider";
import { useOrder } from "@/providers/OrderProvider";

import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomIn,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { NumericFormat } from "react-number-format";
import { useRouter } from "next/navigation";

import { useState } from "react";
export type ShoppingCardProps = {
  shopId: string;
  productId: string;
  color: string;
  images: string;
  productName: string;
  productPrice: number;
};

type BucketProduct = {
  _id: string;
  productName: string;
  productColor: string;
  image: string;
  price: number;
  quantity: number;
};
export const SecondCard = (props: ShoppingCardProps) => {
  const { images, productName, productPrice, productId, color, shopId } = props;
  const { addToBucket } = useOrder();
  const [open, setOpen] = useState(false);

  // const { setSingleProduct } = useProduct();

  return (
    <Stack
      width={1}
      boxShadow={"5px 10px 8px  #F5F5F5 "}
      border={"solid 1px #F5F5F5"}
      overflow={"hidden"}
      sx={{
        aspectRatio: 270 / 361,
        transition: "0.2 linear",
        "&:hover .info": {
          backgroundColor: "#2F1AC4",
        },
        "&:hover .details": {
          opacity: "1",
        },
        "&:hover .productName": {
          color: "common.white",
        },
        "&:hover .productPrice": {
          color: "common.white",
        },
        "&:hover .image": {
          transform: "scale(1.05)",
          transition: "0.2s ease",
        },
        ".image": {
          transition: "0.5s ease",
        },
        ".info": {
          transition: "0.5s ease",
        },
      }}
    >
      <Stack
        width={1}
        sx={{ aspectRatio: 1 / 1 }}
        position={"relative"}
        zIndex={1}
        maxHeight={"270px"}
      >
        <Image
          className="image"
          alt="product image"
          style={{
            objectFit: "cover",
            aspectRatio: 1 / 1.2,
            mixBlendMode: "multiply",
          }}
          fill
          sizes="small"
          src={images}
        />
        <Stack
          position={"absolute"}
          sx={{ opacity: 0, transition: "0.3s ease" }}
          className="details"
          width={1}
          height={1}
          bgcolor={"#00000000"}
          justifyContent={"space-between"}
          zIndex={1}
        >
          <Stack flexDirection={"row"} gap={2} p={"11px"}>
            <Stack
              width={30}
              height={30}
              color={"primary.main"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                addToBucket({
                  productColor: color,
                  productName: productName,
                  _id: productId,
                  quantity: 1,
                  image: images,
                  price: productPrice,
                  shopId: shopId,
                });
              }}
            >
              <ShoppingCartOutlined
                fontSize="inherit"
                sx={{ fill: "#2F1AC4" }}
              />
            </Stack>
            <Stack
              width={30}
              height={30}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              <FavoriteBorder sx={{ fill: "#1389FF" }} />
            </Stack>
            <Stack
              width={30}
              height={30}
              color={"#1389ff"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <ZoomIn sx={{ fill: "#1389FF" }} />
            </Stack>
          </Stack>
          <Stack pb={1.5} alignItems={"center"}>
            <Link href={`/sort/${productId}`}>
              <Stack
                py={1}
                px={2}
                sx={{
                  bgcolor: "#08D15F",
                  color: "common.white",
                  width: "fit-content",
                  borderRadius: "2px",
                }}
                onClick={() => {
                  // setSingleProduct(props);
                }}
              >
                <Typography>дэлгэрэнгүй</Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        className="info"
        pt={"15px"}
        pb={"29px"}
        gap={"37px"}
        bgcolor={"common.white"}
        fontSize={18}
        fontWeight={700}
        width={1}
        alignItems={"center"}
        sx={{ transition: "0.3s linear" }}
      >
        <Typography
          width={1}
          px={3}
          textAlign={"center"}
          className="productName"
          color={"primary.light"}
        >
          {productName}
        </Typography>
        <Typography
          fontWeight={700}
          fontSize={18}
          className="productPrice"
          color={"#151875"}
        >
          <NumericFormat
            value={productPrice}
            thousandSeparator=","
            displayType="text"
            suffix="₮"
            renderText={(value) => <b>{value}</b>}
          />
        </Typography>
      </Stack>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Stack
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "800px",
            width: { xs: "90%", md: "50%" },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            borderRadius: "8px",
          }}
        >
          <Stack
            flexDirection={"column"}
            gap={3}
            p={3}
            alignItems={"center"}
            justifyContent={"center"}
            overflow={"hidden"}
          >
            <Stack
              onClick={() => {
                setOpen(false);
              }}
              p={1}
              borderRadius={"50%"}
              position={"absolute"}
              zIndex={1}
              top={15}
              right={15}
            >
              <CloseIcon />
            </Stack>
            <Stack position={"relative"} width={"550px"} height={"550px"}>
              <Image
                style={{ objectFit: "contain" }}
                src={images}
                alt="shaadgue"
                fill
              />
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
};
