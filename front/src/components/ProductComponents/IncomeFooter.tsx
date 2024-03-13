import { CreateOutlined, DeleteOutline } from "@mui/icons-material";
import { Checkbox, Stack, Typography } from "@mui/material";
import { IncomeFooterTop } from "./IncomeFooterTop";

type OrdersRowType = {
  OrderId: string;
  Order: string;
  payee: number;
  addedDate: string;
};

export const IncomeFooter = (props: OrdersRowType) => {
  const { OrderId, Order, payee, addedDate } = props;
  return (
    <Stack
      width="50%"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="solid 1px #f0f0f0"
      p={2}
    >
      <Typography fontSize="14px" fontWeight={600}>
        &#35;{OrderId}
      </Typography>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {Order}
      </Typography>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {payee}₮
      </Typography>
      <Typography fontSize="14px" fontWeight={400} color="#3F4145">
        {addedDate}
      </Typography>
    </Stack>
  );
};