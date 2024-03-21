// export default function SettingsPage() {
//   return <></>;
// }
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function SettingsPage() {
  return (
    <Stack
      ml={"10%"}
      mt={6}
      py={4}
      px={3}
      gap={2}
      maxWidth={730}
      width={"100%"}
      bgcolor={"#fff"}
      borderRadius={3}
    >
      <Typography fontSize={18} fontWeight={600}>
        Дэлгүүрийн профайл үүсгэх
      </Typography>
      <Stack gap={1} justifyContent={"center"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={2}
          border={1}
          borderRadius={2}
          borderColor={"#ECEDF0"}
        >
          <Stack direction={"row"} gap={2}>
            <CheckIcon sx={{ fill: "green" }} />
            <Typography>Дэлгүүрийн төрлөө оруулна уу</Typography>
          </Stack>
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#000",
              bgcolor: "#ECEDF0",
            }}
          >
            Дэлгүүрийн төрөл
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={2}
          border={1}
          borderRadius={2}
          borderColor={"#ECEDF0"}
        >
          <Stack direction={"row"} gap={2}>
            <CheckIcon sx={{ fill: "green" }} />
            <Typography>Дэлгүүрийн төрлөө оруулна уу</Typography>
          </Stack>
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#000",
              bgcolor: "#ECEDF0",
            }}
          >
            Дэлгүүрийн төрөл
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={2}
          border={1}
          borderRadius={2}
          borderColor={"#ECEDF0"}
        >
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <RadioButtonUncheckedIcon sx={{ fontSize: "12px" }} />
            <Typography>Дэлгүүрийн төрлөө оруулна уу</Typography>
          </Stack>
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#000",
              bgcolor: "#ECEDF0",
            }}
          >
            Дэлгүүрийн төрөл
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
