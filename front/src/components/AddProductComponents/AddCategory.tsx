import { Add } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export const AddCategory = () => {
  return (
    <Stack width={"100%"} alignItems={"flex-start"} gap={3}>
      <Typography fontSize={18} fontWeight={600}>
        Төрөл
      </Typography>
      <Stack gap={1}>
        <Stack gap={3} flexDirection={"row"} alignItems={"center"}>
          <Typography fontSize={18}>Өнгө</Typography>
          <Stack
            width={32}
            sx={{ aspectRatio: "1/1" }}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
            bgcolor={"#ECEDF0"}
          >
            <Add />
          </Stack>
        </Stack>
        <Stack gap={3} flexDirection={"row"} alignItems={"center"}>
          <Typography fontSize={18}>Хэмжээ</Typography>
          <Stack
            width={32}
            sx={{ aspectRatio: "1/1" }}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
            bgcolor={"#ECEDF0"}
          >
            <Add />
          </Stack>
        </Stack>
      </Stack>
      <Typography
        fontSize={14}
        fontWeight={600}
        padding={"10px 16px"}
        border={"1px solid #D6D8DB"}
        borderRadius={1.5}
        sx={{ cursor: "pointer" }}
      >
        Төрөл нэмэх
      </Typography>
    </Stack>
  );
};
