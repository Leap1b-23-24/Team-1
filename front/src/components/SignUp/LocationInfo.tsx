import { SignUpType } from "@/components/SignUp/SignUp";
import { ArrowBack, ArrowForward, Check } from "@mui/icons-material";
import { Button, MenuItem, Select, Stack, Typography } from "@mui/material";
import { StepSection } from "./StepSection";
import { useAuth } from "@/providers/AuthProvider";
import { SignUpInput } from "./SignUpInput";

const districts = [
  "Баянзүрх дүүрэг",
  "Хан-Уул дүүрэг",
  "Баянгол дүүрэг",
  "Сонгинохайрхан дүүрэг",
  "Чингэлтэй дүүрэг",
];

export const LocationInfo = (props: SignUpType) => {
  const { order, setOrder } = props;
  const { district, setDistrict, city, setCity, khoroo, setKhoroo } = useAuth();
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
        <Select
          value={city}
          label="Хот/Аймаг"
          placeholder="Сонгох"
          sx={{ color: "#000" }}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        >
          {districts.map((item) => {
            return (
              <MenuItem value={item}>
                <Stack direction={"row"} gap={1}>
                  {" "}
                  {item}
                </Stack>
              </MenuItem>
            );
          })}
        </Select>
        <SignUpInput
          value={district}
          label="Сум/Дүүрэг"
          placeholder="Сум/Дүүрэг"
          onChange={(event) => {
            setDistrict(event.target.value);
          }}
        />
        <SignUpInput
          value={khoroo}
          label="Хороо"
          placeholder="Хороо"
          onChange={(event) => {
            setKhoroo(event.target.value);
          }}
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
              setOrder(2);
            }}
          >
            <ArrowBack />
          </Stack>
          <Button
            variant="contained"
            disabled={!city || !khoroo || !district}
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
