import { CreateOutlined, DeleteOutline } from "@mui/icons-material";
import { Checkbox, Stack, Typography } from "@mui/material";

type AdminClothesRowType = {
  productName: string;
  priority: number;
  category: string;
  price: number;
  arrearage: number;
  sold: number;
  addedDate: string;
};

export const AdminClothesRow = (props: AdminClothesRowType) => {
  const { productName, priority, category, price, arrearage, sold, addedDate } =
    props;
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Checkbox />
      <Stack>
        <Stack></Stack>
        <Stack>
          <Typography fontSize="14px" fontWeight={600}>
            {productName}
          </Typography>
          <Typography fontSize="12px" fontWeight={400} color="#3F4145">
            {priority}
          </Typography>
        </Stack>
      </Stack>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {category}
      </Typography>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {price}₮
      </Typography>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {arrearage}
      </Typography>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {sold}
      </Typography>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {addedDate}
      </Typography>
      <Stack direction="row">
        <DeleteOutline />
        <CreateOutlined />
      </Stack>
    </Stack>
  );
};
