"use client";
import { useOrder } from "@/providers/OrderProvider";
import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomIn,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
type ShoppingCardProps = {
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
  return (
    <Stack width={"100%"} height={1} paddingX={1}>
      <Stack
        position={"relative"}
        width={1}
        sx={{
          aspectRatio: 1 / 1,
          transition: "0.2 linear",
          "&:hover .image": {
            transform: "scale(1.05)",
            transition: "0.2s ease",
          },
          "&:hover .details": {
            opacity: "1",
          },
          ".image": {
            transition: "0.5s ease",
          },
        }}
        overflow={"hidden"}
        bgcolor={"common.white"}
      >
        <Image
          className="image"
          alt="product image"
          style={{ objectFit: "cover" }}
          src={images}
          fill
          sizes="small"
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
          <Stack gap={1.25} p={"11px"} height={1} justifyContent={"end"}>
            <Stack
              width={30}
              height={30}
              bgcolor={"common.white"}
              color={"#151875"}
              borderRadius={"50%"}
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
                sx={{ fill: "#151875" }}
              />
            </Stack>

            <Stack
              width={30}
              height={30}
              borderRadius={"50%"}
              color={"#1389ff"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
            >
              <FavoriteBorder
                fontSize="inherit"
                // color="#151875"
                sx={{ fill: "#151875" }}
              />
            </Stack>
            <Stack
              width={30}
              height={30}
              borderRadius={"50%"}
              color={"#1389ff"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={20}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <ZoomIn fontSize="inherit" sx={{ fill: "#151875" }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems={"center"}>
        <Typography
          color={"#151875"}
          mt={"18px"}
          fontSize={18}
          fontWeight={700}
        >
          {productName}
        </Typography>
        <Stack flexDirection={"row"} gap={"6px"} mt={1} mb="15px">
          {/* {productColor.map((item, index) => (
            <Stack
              key={index}
              p={"5px"}
              borderRadius={10}
              bgcolor={item}
            ></Stack>
          ))} */}
        </Stack>
        <Stack flexDirection={"row"} gap={1.25} fontSize={14} fontWeight={400}>
          <Typography color={"#151875"}>{`${productPrice}₮`}</Typography>
          <Typography
            color={"#FB2E86"}
            sx={{ textDecoration: "line-through" }}
          ></Typography>
        </Stack>
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
            <Stack position={"relative"} width={"600px"} height={"600px"}>
              <Image
                style={{ objectFit: "contain" }}
                src={images}
                alt="zoom in"
                fill
              />
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
};
