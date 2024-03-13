import { SignUpType } from "@/components/SignUp/SignUp";
import { ArrowBack, ArrowForward, Check } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { StepSection } from "./StepSection";

export const LocationInfo = (props: SignUpType) => {
  const { order, setOrder } = props;
  return (
    <Stack
      display={order === 3 ? "flex" : "none"}
      gap={20}
      alignItems={"center"}
    >
      <StepSection order={order} setOrder={setOrder} />
      <Stack p={3} gap={2} width={452}>
        <Typography fontSize={32} fontWeight={700} color={"#121316"}>
          Бүс нутгийн мэдээлэл
        </Typography>
        <Stack
          width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack
            width={48}
            height={48}
            borderRadius={"100%"}
            bgcolor={"#1C20240A"}
            alignItems={"center"}
            justifyContent={"center"}
            onClick={() => {
              setOrder(2);
            }}
          >
            <ArrowBack />
          </Stack>
          <Button
            variant="contained"
            sx={{
              position: "relative",
              p: "16px 20px",
              gap: "8px",
              borderRadius: "8px",
            }}
            onClick={() => {
              setOrder(4);
            }}
          >
            <Typography fontSize={18}>Дараах</Typography>
            <ArrowForward />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};