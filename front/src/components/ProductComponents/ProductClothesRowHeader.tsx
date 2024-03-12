import { CheckBox, CreateOutlined, DeleteOutline } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const titles = [
  "Бүтээгдэхүүн",
  "Ангилал",
  "Үнэ",
  "Үлдэгдэл",
  "Зарагдсан",
  " Нэмсэн огноо",
];

export const ProductClothesRowHeader = () => {
  return (
    <Stack
      direction="row"
      width="100%"
      justifyContent="center"
      alignItems="center"
      borderBottom="solid 1px #b4b4b4"
      py="12px"
    >
      <Stack
        width="72%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {titles.map((item, index) => {
          return (
            <Typography key={index} fontSize="14px" fontWeight={600}>
              {item}
            </Typography>
          );
        })}
      </Stack>
    </Stack>
  );
};
