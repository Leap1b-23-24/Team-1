"use state";
import { CategoryType } from "@/providers/AddproductProvider";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { Input, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

type ProductFilterDropdownCardProps = {
  icon: ReactNode;
  title: string;
  mapArr?: CategoryType[];
  setState: Dispatch<SetStateAction<string>>;
  state: string;
};

export const ProductFilterDropdownCard = (
  props: ProductFilterDropdownCardProps
) => {
  const { icon, title, mapArr, setState, state } = props;
  const [isShown, setIsShown] = useState(false);
  const [name, setName] = useState("");

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
        sx={{ cursor: "pointer" }}
        onDoubleClick={() => {
          setState("");
          setName("");
        }}
        onClick={() => {
          setIsShown((prev) => !prev);
        }}
      >
        {icon}
        <Typography fontWeight={600} fontSize={14} color={"#3F4145"}>
          {name && state ? name : title}
        </Typography>
        {isShown ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
      </Stack>

      <Stack
        display={isShown ? "flex" : "none"}
        position={"absolute"}
        maxHeight={200}
        overflow={"scroll"}
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
                    setState(item._id);
                    setName(item.name);
                    setIsShown((prev) => !prev);
                  }}
                >
                  <Typography
                    fontWeight={600}
                    color={"#3F4145"}
                    sx={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </Typography>
                </Stack>
              );
            })
          : null}
      </Stack>
    </Stack>
  );
};
