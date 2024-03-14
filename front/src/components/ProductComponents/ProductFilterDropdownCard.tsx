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
    <Stack position={"relative"}>
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
        <Stack
          display={isShown ? "flex" : "none"}
          position={"absolute"}
          top={48}
          zIndex={10}
          bgcolor={"white"}
          borderRadius={2}
          width={"100%"}
          border={"1px solid #ECEDF0"}
          sx={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}
        >
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
          sx={{ position: "absolute", top: "48px" }}
        />
      ) : null}
    </Stack>
  );
};
