import { Stack, Typography } from "@mui/material";

export type ProductCardType = {
  productName: string;
  date?: string;
  productId?: number;
  productQuantity: number;
  productPrice: number;
  totalPrice?: number;
};

export const ProductCard = (props: ProductCardType) => {
  const {
    productName,
    date,
    productId,
    productQuantity,
    productPrice,
    totalPrice,
  } = props;
  return (
    <Stack
      width="100%"
      direction="row"
      borderRadius="12px"
      bgcolor="#F7F7F8"
      //   height="fit-content"
      overflow="hidden"
    >
      <Stack width="30%">
        <img src="tshirt.jpeg" alt="" style={{ objectFit: "cover" }} />
      </Stack>
      <Stack width="70%" gap={2} justifyContent="center" padding={3}>
        <Typography fontSize="24px" fontWeight={700} color="primary">
          {productName}
        </Typography>
        <Stack>
          <Typography fontSize="14px" fontWeight={400} color="#3F4145">
            {date}
          </Typography>
          <Typography
            display="flex"
            fontSize="14px"
            fontWeight={400}
            color="#3F4145"
          >
            {"Бүтээгдэхүүний ID:"}
            {productId}
          </Typography>
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
            {" "}
            ₮{totalPrice}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
