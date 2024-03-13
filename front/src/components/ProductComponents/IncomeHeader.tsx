import {
  CalendarTodayOutlined,
  ExpandMoreOutlined,
  FileDownloadOutlined,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type IncomeHeaderButtonType = {
  label: string;
  icon?: any;
  arrow?: any;
  setGetColor: Dispatch<SetStateAction<string>>;
  getColor?: string;
};

const buttonNames = [
  { label: "Өнөөдөр" },
  { label: "7 хоног" },
  {
    icon: <CalendarTodayOutlined />,
    label: "Сараар",
    arrow: <ExpandMoreOutlined />,
  },
];

export const IncomeHeader = () => {
  const [totalPrice, setTotalPrice] = useState(235000);
  const [getColor, setGetColor] = useState(buttonNames[0].label);

  return (
    <Stack width="50%" borderRadius="12px" border="solid 1px #ECEDF0">
      <Stack
        borderBottom="1px solid #ECEDF0"
        px={3}
        py="20px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="20px" fontWeight={700}>
          {"Орлого"}
        </Typography>
        <Stack
          direction="row"
          bgcolor={"#1C20240A"}
          gap={1}
          py={1}
          px="12px"
          borderRadius="8px"
          alignItems="center"
          onClick={() => {}}
        >
          <FileDownloadOutlined /> {"Хуулга татах"}
        </Stack>
      </Stack>
      <Stack direction="row" padding={3} justifyContent="space-between">
        <Typography fontSize="28px" fontWeight={700}>
          {totalPrice}₮
        </Typography>
        <Stack direction="row" gap={1}>
          {buttonNames.map((item, index) => {
            return (
              <IncomeHeaderButton
                key={index}
                label={item.label}
                icon={item.icon}
                arrow={item.arrow}
                setGetColor={setGetColor}
                getColor={getColor}
              />
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export const IncomeHeaderButton = (props: IncomeHeaderButtonType) => {
  const { icon, label, arrow, setGetColor, getColor } = props;

  return (
    <Stack
      border="solid 1px #ECEDF0"
      borderRadius="8px"
      px="12px"
      py={1}
      direction="row"
      gap={1}
      alignItems="center"
      bgcolor={getColor == label ? "#18BA51 " : ""}
      color={getColor == label ? "white " : ""}
      onClick={() => {
        setGetColor(label);
      }}
    >
      {icon}
      {label}
      {arrow}
    </Stack>
  );
};
