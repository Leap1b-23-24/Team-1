"use state";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { Input, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

type ProductFilterDropdownCardProps = {
  svg: string;
  title: string;
  mapArr?: string[];
  setState: Dispatch<SetStateAction<string>>;
};

export const ProductFilterDropdownCard = (
  props: ProductFilterDropdownCardProps
) => {
  const { svg, title, mapArr, setState } = props;
  const [isShown, setIsShown] = useState(false);

  return (
    <Stack>
      <Stack
        bgcolor="white"
        direction="row"
        gap={1}
        borderRadius={2}
        p="8px 12px"
        border="1px solid #ECEDF0"
        alignItems={"center"}
        onClick={() => {
          setIsShown((prev) => !prev);
        }}
      >
        <Image src={svg} alt="svg" width={24} height={24} />
        <Typography fontWeight={600} fontSize={14} color={"#3F4145"}>
          {title}
        </Typography>
        {isShown ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
      </Stack>
      {title !== "Сараар" ? (
        <Stack display={isShown ? "flex" : "none"}>
          {mapArr
            ? mapArr.map((item, index) => {
                return (
                  <Stack
                    direction={"row"}
                    p="8px 12px"
                    borderRadius={2}
                    key={index}
                    onClick={() => {
                      setState(item);
                      setIsShown((prev) => !prev);
                    }}
                  >
                    <Typography fontWeight={600} color={"#3F4145"}>
                      {item}
                    </Typography>
                  </Stack>
                );
              })
            : null}
        </Stack>
      ) : isShown ? (
        <Input
          type="date"
          onChange={(event) => {
            [setState(event?.target.value)];
          }}
        />
      ) : null}
    </Stack>
  );
};
