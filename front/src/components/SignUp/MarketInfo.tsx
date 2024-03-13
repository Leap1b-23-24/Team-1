import { SignUpType } from "@/components/SignUp/SignUp";
import { ArrowBack, ArrowForward, Check } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { StepSection } from "./StepSection";
import { SignUpInput } from "./SignUpInput";

export const MarketInfo = (props: SignUpType) => {
  const { order, setOrder } = props;
  return (
    <Stack
      display={order === 2 ? "flex" : "none"}
      gap={20}
      alignItems={"center"}
    >
      <StepSection order={order} setOrder={setOrder} />
      <Stack p={3} gap={2} width={452}>
        <Typography fontSize={32} fontWeight={700} color={"#121316"}>
          Дэлгүүрийн мэдээлэл
        </Typography>
        <SignUpInput
          label="Танай дэлгүүрийн нэр юу вэ?"
          placeholder="Дэлгүүрийн нэр"
        />
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
              setOrder(1);
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
              setOrder(3);
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
