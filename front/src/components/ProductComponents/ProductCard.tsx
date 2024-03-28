import { ArrowDropDown } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export type ProductCardType = {
  productName: string;
  date?: string;
  _id?: string;
  productPicture?: string;
  productQuantity: number;
  productPrice: number;
  totalPrice?: number;
  status?: String;
};

export const ProductCard = (props: ProductCardType) => {
  const {
    productName,
    date,
    _id,
    productQuantity,
    productPrice,
    productPicture,
    status,
  } = props;
  return (
    <Stack
      width="100%"
      direction="row"
      borderRadius="12px"
      bgcolor="#F7F7F8"
      overflow="hidden"
    >
      <Stack width="30%" position={"relative"}>
        <Image src={`${productPicture}`} alt="" fill />
      </Stack>
      <Stack width="70%" gap={2} justifyContent="center" padding={3}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Stack gap={2}>
            <Typography fontSize="24px" fontWeight={700} color="primary">
              {productName}
            </Typography>
            <Typography fontSize="14px" fontWeight={400} color="#3F4145">
              {"Бүтээгдэхүүний ID:"}
              {_id}
            </Typography>
          </Stack>
          <Stack
            border={2}
            padding={"4px 10px"}
            flexDirection={"row"}
            gap={1}
            sx={{ cursor: "pointer" }}
            borderRadius={"12px"}
          >
            <Typography fontWeight={550}>{status}</Typography>
            <ArrowDropDown />
          </Stack>
        </Stack>

        <Stack direction="row" alignItems={"center"}>
          <Stack
            direction="row"
            fontSize="16px"
            fontWeight={400}
            color="#3F4145"
            justifyContent="space-between"
            width="100%"
          >
            <Typography
              fontSize="14px"
              fontWeight={400}
              color="#3F4145"
              display="flex"
            >
              {"Тоо ширхэг:"} {productQuantity}
              {" * "}
              {productPrice}₮
            </Typography>
          </Stack>

          <Typography fontSize="18px" fontWeight={600} color="primary">
            ₮{productPrice * productQuantity}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

{
  /* <Stack height={"100%"} justifyContent={"space-between"} border={1}>
            <Stack position={"relative"}>
              <Typography>{status}</Typography>
            </Stack>     </Stack> */
}
