import { Add, ImageOutlined } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";

export const AddPicture = () => {
  return (
    <Stack width={"100%"} gap={2}>
      <Typography fontSize={18} fontWeight={600}>
        Бүтээгдэхүүний зураг
      </Typography>
      <Stack
        width={"100%"}
        flexDirection={"row"}
        gap={1}
        sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
      >
        <Stack
          width={"100%"}
          sx={{
            aspectRatio: "1/1",
            border: "1px dotted #D6D8DB",
            borderRadius: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageOutlined />
        </Stack>
        <Stack
          width={"100%"}
          sx={{
            aspectRatio: "1/1",
            border: "1px dotted #D6D8DB",
            borderRadius: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageOutlined />
        </Stack>
        <Stack
          width={"100%"}
          sx={{
            aspectRatio: "1/1",
            border: "1px dotted #D6D8DB",
            borderRadius: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageOutlined />
        </Stack>
        <Stack
          width={"100%"}
          sx={{
            aspectRatio: "1/1",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            width={32}
            bgcolor={"#ECEDF0"}
            borderRadius={"50%"}
            position={"relative"}
            sx={{
              aspectRatio: "1/1",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              type="file"
              variant="filled"
              inputProps={{
                style: {
                  padding: "0",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: 0,
                },
              }}
              InputProps={{ disableUnderline: true }}
            />
            <Add />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
