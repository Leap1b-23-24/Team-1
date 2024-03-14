import { SignUpType } from "@/components/SignUp/SignUp";
import { ArrowBack, ArrowForward, Check } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { StepSection } from "./StepSection";
import { Selection } from "./Selection";
import { useAuth } from "@/providers/AuthProvider";

const answers = ["yes", "no"];

export const MoreInfo = (props: SignUpType) => {
  const { order, setOrder } = props;
  const { experience, setExperience, productType, setProductType } = useAuth();

  return (
    <Stack
      display={order === 4 ? "flex" : "none"}
      gap={20}
      alignItems={"center"}
    >
      <StepSection order={order} setOrder={setOrder} />
      <Stack p={3} gap={2} width={452}>
        <Typography fontSize={32} fontWeight={700} color={"#121316"}>
          Жоохон танилцъя
        </Typography>
        <Typography color={"#121316"}>
          Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана.
        </Typography>
        <Selection
          label="Та борлуулалт хийж байсан туршлагатай юу?"
          placeHolder="Сонгох"
          selections={answers}
          setState={setExperience}
          state={experience}
        />
        <Selection
          label="Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?"
          placeHolder="Сонгох"
          selections={answers}
          setState={setProductType}
          state={productType}
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
              setOrder(3);
            }}
          >
            <ArrowBack />
          </Stack>
          <Button
            variant="contained"
            disabled={!productType || !experience}
            sx={{
              position: "relative",
              p: "16px 20px",
              gap: "8px",
              borderRadius: "8px",
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
