import { useOrder } from "@/providers/OrderProvider";
import { Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";

import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomIn,
} from "@mui/icons-material";
import { useState } from "react";
import { ShoppingCardProps } from "../ShoppingCard";
import CloseIcon from "@mui/icons-material/Close";
import { NumericFormat } from "react-number-format";

export const SorttingCard = (props: ShoppingCardProps) => {
  const [open, setOpen] = useState(false);
  const {
    images,
    productName,
    productPrice,
    productId,
    color,
    shopId,
    description,
  } = props;

  const { addToBucket } = useOrder();
  return (
    <Stack width={"100%"} direction={"row"} gap={2}>
      <Stack width={"25%"} height={270} position={"relative"}>
        <Image
          className="image"
          alt="product image"
          style={{ objectFit: "cover" }}
          src={images}
          fill
          sizes="small"
        />
      </Stack>
      <Stack justifyContent={"space-between"}>
        <Stack>
          <Typography
            color={"#151875"}
            mt={"18px"}
            fontSize={18}
            fontWeight={700}
          >
            {productName}
          </Typography>

          <Stack
            flexDirection={"row"}
            gap={1.25}
            fontSize={14}
            fontWeight={400}
          >
            <Typography color={"#151875"}>
              {" "}
              <NumericFormat
                value={productPrice}
                thousandSeparator=","
                displayType="text"
                suffix="₮"
                renderText={(value) => <b>{value}</b>}
              />
            </Typography>
          </Stack>
          <Typography sx={{ mt: "12px" }}>{description}</Typography>
        </Stack>
        <Stack>
          <Stack direction={"row"} gap={1.25} p={"11px"} height={1}>
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
