import { ArrowDropDown } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
const status = ["Бэлтгэгдэж буй", "Хүргэлтэнд гарсан", "Хүргэгдсэн"];

export const OrderStatus = () => {
  return (
    <Stack
      width={"80%"}
      height={"80%"}
      border={1}
      borderRadius={3}
      padding={"4px 10px"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"relative"}
    >
      <Stack width={"100%"} position={"absolute"} top={"100%"}>
        {status.map((each) => {
          return <Typography>{each}</Typography>;
        })}
      </Stack>

      <Stack>
        <ArrowDropDown />
      </Stack>
    </Stack>
  );
};
