import { ContentPaste, Create, Sell, Settings } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const menu = [
  { name: "Хяналтын самбар", icon: <Create /> },
  { name: "Захилга", icon: <ContentPaste /> },
  { name: "Орлого", icon: <Sell /> },
  { name: "Бүтээгдэхүүн", icon: <Create /> },
  { name: "Тохиргоо", icon: <Settings /> },
];

export const ProductSideBar = () => {
  return (
    <Stack width="12%" py={3} height="100vh">
      {menu.map((item, index) => {
        return (
          <Stack key={index} direction="row" gap={1} py={1} marginLeft={2}>
            {item.icon}
            <Typography fontSize="16px" fontWeight={600}>
              {item.name}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
