import { PaymentInformation } from "@/components/ProductComponents";
import DeliveryInformation from "@/components/ProductComponents/DeliveryInformation";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";

export default function OrderDetailPage() {
  return (
    <Stack width="100%" bgcolor="#F7F7F8" height="95vh">
      <Stack
        width="100%"
        padding={2}
        direction="row"
        gap={3}
        fontSize="16px"
        fontWeight={400}
        alignItems="center"
        bgcolor="white"
      >
        <ArrowBackIosNewOutlined />
        {"Захиалгын дэлгэрэнгүй"}
      </Stack>
      <Stack direction="row" padding={3} gap={3} width="100%">
        <Stack gap={3}>
          <DeliveryInformation />
          <PaymentInformation />
        </Stack>
      </Stack>
    </Stack>
  );
}
