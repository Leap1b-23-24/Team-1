import { Rating, Stack, Typography } from "@mui/material";

export const AllComment = () => {
  return (
    <Stack width={"100%"} gap={3}>
      <Stack direction={"row"} gap={2}>
        <Typography color={"#1D3178"} fontSize={"18px"} fontWeight={800}>
          {"Нийт үнэлгээ:"}{" "}
        </Typography>
        <Stack direction={"row"}>
          <Rating /> {"(32)"}
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        gap={3}
        px={3}
        py={4}
        bgcolor={"white"}
        borderRadius={"8px"}
      >
        <Comment />
      </Stack>
    </Stack>
  );
};
const Comment = () => {
  return (
    <Stack
      width={"100%"}
      borderBottom={"1px #BFC6E0 dashed"}
      gap={4}
      paddingBottom={4}
    >
      <Rating />
      <Stack gap={1}>
        <Typography fontSize={"18px"} fontWeight={800} color={"#1D3178"}>
          {"Name"}
        </Typography>
        <Typography color={"#9295AA"} fontWeight={400} fontSize={"17px"}>
          {"Материал нь ёстой гоё юм байна дахиж авна аа"}
        </Typography>
      </Stack>
    </Stack>
  );
};
