"use client";
import { ArrowDropDown } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  orderNumber: string;
  setIsShown: Dispatch<SetStateAction<boolean>>;
  isShown: boolean;
  setOrderState: Dispatch<SetStateAction<string>>;
};

const options = ["Бэлтгэгдэж байна", "Хүргэлтэд гарсан", "Амжилттай"];

export const OrderDetailTop = (props: Props) => {
  const { orderNumber, setOrderState, setIsShown, isShown } = props;
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack gap={0.5}>
        <Typography fontSize={16}>Захиалгын ID дугаар: </Typography>
        <Typography fontSize={16} fontWeight={600}>
          {` #${orderNumber}`}
        </Typography>
      </Stack>
      <Stack position={"relative"}>
        <Stack
          direction={"row"}
          p={1}
          gap={1}
          bgcolor={"#ECEDF0"}
          borderRadius={6}
          onClick={() => {
            setIsShown((prev) => !prev);
          }}
        >
          <Typography color={"#3F4145"}>Бэлтгэгдэж байна</Typography>
          <ArrowDropDown />
        </Stack>
        <Stack
          display={isShown ? "flex" : "none"}
          position={"absolute"}
          top={"120%"}
          width={"100%"}
          p={1}
          gap={1}
          bgcolor={"#ECEDF0"}
          borderRadius={4}
          sx={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}
        >
          {options.map((item, index) => {
            return (
              <Stack
                key={index}
                width={"100%"}
                onClick={() => {
                  setOrderState(item);
                  setIsShown((prev) => !prev);
                }}
              >
                <Typography
                  color={"#3F4145"}
                  sx={{
                    "&:hover": {
                      fontWeight: "600",
                    },
                    cursor: "pointer",
                  }}
                >
                  {item}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};
