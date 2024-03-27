import { useOrder } from "@/providers/OrderProvider";
import { Stack, Typography } from "@mui/material";

import { FavoriteBorder, ZoomIn } from "@mui/icons-material";

import { ShoppingCardProps } from "./ShoppingCard";
import Image from "next/image";

export const DetailedPage = (props: ShoppingCardProps) => {
  const { images, productName, productPrice, description } = props;

  const { addToBucket } = useOrder();
  return (
    <Stack width={"100%"} direction={"row"} gap={2} py={6}>
      <Stack width={"25%"} height={270} position={"relative"}>
        <Image
          alt="product image"
          src={
            `${images[0]}`
            // "https://res.cloudinary.com/drwacb3lb/image/upload/v1711001667/productImage/hdx0wwmaih7g3rjwbvxi.jpg"
          }
          fill
          sizes="small"
        />
      </Stack>
      <Stack justifyContent={"space-between"}>
        <Stack>
          <Typography
            color={"#111C85"}
            mt={"18px"}
            fontSize={36}
            fontWeight={800}
          >
            {productName}
          </Typography>

          <Stack flexDirection={"row"} gap={1.25}>
            <Typography
              fontSize={36}
              fontWeight={400}
              color={"#151875"}
            >{`${productPrice}₮`}</Typography>
          </Stack>
          <Typography sx={{ mt: "12px" }}>{description}</Typography>
        </Stack>
        <Stack>
          <Stack
            direction={"row"}
            gap={1.25}
            p={"11px"}
            height={1}
            alignItems={"center"}
          >
            <Stack
              sx={{ cursor: "pointer" }}
              // onClick={() => {
              //   addToBucket({
              //     productColor: color,
              //     productName: productName,
              //     _id: productId,
              //     quantity: 1,
              //     image: images,
              //     price: productPrice,
              //     shopId: shopId,
              //   });
              // }}
            >
              <Typography color={"#151875"} fontWeight={800} fontSize={16}>
                Add To Cart
              </Typography>
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
            >
              <ZoomIn fontSize="inherit" sx={{ fill: "#151875" }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
