import { Stack, Typography } from "@mui/material";

export const BucketHeader = () => {
  const options = ["Бүтээгдэхүүн", "Үнэ", "Тоо ширхэг", "Нийт"];
  return (
    <Stack
      width={"100%"}
      display={"grid"}
      gridTemplateColumns={"repeat(4,1fr)"}
    >
      {options.map((text) => {
        return (
          <Typography
            key={text}
            width={"100%"}
            textAlign={"center"}
            fontSize={20}
            fontWeight={800}
            color={"#1D3178"}
          >
            {text}
          </Typography>
        );
      })}
    </Stack>
  );
};
