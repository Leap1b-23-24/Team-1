import { SignUpType } from "@/components/SignUp/SignUp";
import { Check } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export const StepSection = (props: SignUpType) => {
  const { order, setOrder } = props;
  return (
    <Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Stack
          width={36}
          height={36}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"100%"}
          bgcolor={"#121316"}
          color={"white"}
        >
          {order === 2 ? "1" : <Check />}
        </Stack>
        <Stack
          width={274}
          height={4}
          bgcolor={order >= 3 ? "#121316" : "#1C202414"}
        />
        <Stack
          width={36}
          height={36}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"100%"}
          bgcolor={order >= 3 ? "#121316" : "#1C202414"}
          color={order >= 3 ? "#fff" : "#000"}
        >
          {order <= 3 ? "2" : <Check />}
        </Stack>
        <Stack
          width={274}
          height={4}
          bgcolor={order >= 4 ? "#121316" : "#1C202414"}
        />
        <Stack
          width={36}
          height={36}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"100%"}
          bgcolor={order >= 4 ? "#121316" : "#1C202414"}
          color={order >= 4 ? "#fff" : "#000"}
        >
          {order <= 4 ? "3" : <Check />}
        </Stack>
      </Stack>
      <Stack direction={"row"} gap={26} ml={-6}>
        <Typography fontWeight={600}>Дэлгүүрийн нэр</Typography>
        <Typography fontWeight={600}>Бүс нутаг</Typography>
        <Typography fontWeight={600}>Нэмэлт мэдээлэл</Typography>
      </Stack>
    </Stack>
  );
};
