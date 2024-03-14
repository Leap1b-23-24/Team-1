import { Divider, Stack, Typography } from "@mui/material";

export default function DeliveryInformation() {
  return (
    <Stack
      height={"204px"}
      width={"100%"}
      borderRadius={"12px"}
      border="solid, 1px, #ECEDF0"
      bgcolor={"white"}
    >
      <Stack height={"64px"} justifyContent={"center"} px={2}>
        <Typography fontWeight={400} fontSize={"16px"}>
          Хүргэлтийн мэдээлэл
        </Typography>
      </Stack>
      <Divider></Divider>
      <Stack justifyContent={"center"} px={2} mt={3}>
        <Typography color={"#3F4145"}>Гэр</Typography>
        <Typography fontWeight={600} fontSize={16}>
          Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14r bair 8r orts 6r
          darvar
        </Typography>
      </Stack>
    </Stack>
  );
}
