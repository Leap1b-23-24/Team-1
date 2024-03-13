import {
  CalendarTodayOutlined,
  ExpandMoreOutlined,
  FileDownloadOutlined,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type IncomeHeaderButtonType = {
  label: string;
  bgcolor?: any;
  icon?: any;
  arrow?: any;
  setGetColor?: Dispatch<SetStateAction<string>>;
};

export const IncomeHeader = () => {
  const [totalPrice, setTotalPrice] = useState(235000);
  const [getColor, setGetColor] = useState("Өнөөдөр");

  return (
    <Stack width="50%" borderRadius="12px" border="solid 1px #ECEDF0">
      <Stack
        borderBottom="1px solid #ECEDF0"
        px={3}
        py="20px"
        direction="row"
        justifyContent="space-between"
      >
        <Typography fontSize="20px" fontWeight={700}>
          {"Орлого"}
        </Typography>
        <IncomeHeaderButton
          icon={<FileDownloadOutlined />}
          //   bgcolor="#ECEDF0"
          label="Хуулга татах"
        />
      </Stack>
      <Stack direction="row" padding={3} justifyContent="space-between">
        <Typography fontSize="28px" fontWeight={700}>
          {totalPrice}₮
        </Typography>
        <Stack direction="row" gap={1}>
          <IncomeHeaderButton label="Өнөөдөр" />
          <IncomeHeaderButton
            label="7 хоног"
            bgcolor={`${getColor == "7 хоног" ? "#18BA51" : "white"}`}
          />
          <IncomeHeaderButton
            label="Сараар"
            icon={<CalendarTodayOutlined />}
            arrow={<ExpandMoreOutlined />}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
export const IncomeHeaderButton = ({
  //   bgcolor,
  icon,
  label,
  arrow,
  bgcolor,
  setGetColor,
}: IncomeHeaderButtonType) => {
  return (
    <Stack
      border="solid 1px #ECEDF0"
      borderRadius="8px"
      bgcolor={bgcolor}
      px="12px"
      py={1}
      direction="row"
      gap={1}
      alignItems="center"
      onClick={() => {
        // setGetColor(label);
      }}
    >
      {icon}
      {label}
      {arrow}
    </Stack>
  );
};
