import { CheckBox, CreateOutlined, DeleteOutline } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const titles = ["Захиалгын ID дугаар", "Захиалагч", "Төлбөр", "Огноо"];

export const IncomeFooterTop = () => {
  return (
    <Stack
      direction="row"
      width="50%"
      justifyContent="center"
      alignItems="center"
      borderBottom="solid 1px #b4b4b4"
    >
      <Stack
        width="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        {titles.map((item, index) => {
          return (
            <Typography
              key={index}
              fontSize="14px"
              fontWeight={600}
              color={"#3F4145"}
            >
              {item}
            </Typography>
          );
        })}
      </Stack>
    </Stack>
  );
};
