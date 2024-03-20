"use client";
import { CategoryType, useProduct } from "@/providers/AddproductProvider";
import { ArrowDropDown } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type CustomSelectProps = {
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  options: CategoryType[];
  label: string;
  placeholder: string;
};

export const CustomSelect = (props: CustomSelectProps) => {
  const { setValue, options, label, placeholder, value } = props;
  const [isShown, setIsshown] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const { addCategory } = useProduct();
  return (
    <Stack width={"100%"} gap={2} position={"relative"}>
      <Typography fontSize={16} fontWeight={600}>
        {label}
      </Typography>
      <Stack
        width={"100%"}
        border={"1px solid #D6D8DB"}
        padding={2}
        borderRadius={2}
        bgcolor={"#F7F7F8"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={() => {
          setIsshown((prev) => !prev);
        }}
      >
        {index !== null ? (
          <Typography fontSize={16} fontWeight={600} color={"primary"}>
            {options[index].name}
          </Typography>
        ) : (
          <Typography fontSize={18} color={"#8B8E95"}>
            {placeholder}
          </Typography>
        )}

        <Stack
          width={24}
          sx={{
            aspectRatio: "1/1",
            rotate: isShown ? "180deg" : "0deg",
            transitionDuration: "0.3s",
          }}
        >
          <ArrowDropDown fontSize="medium" />
        </Stack>
      </Stack>
      {isShown ? (
        <Stack
          width={"100%"}
          position={"absolute"}
          maxHeight={300}
          top={"110%"}
          left={0}
          zIndex={10}
          borderRadius={2}
          border={"1px solid #D6D8DB"}
          overflow={"hidden"}
        >
          {options.map((each, index) => {
            return (
              <Typography
                fontSize={16}
                fontWeight={550}
                padding={2}
                onClick={() => {
                  setValue(each._id);
                  setIndex(index);
                  setIsshown(false);
                }}
                sx={{
                  bgcolor: "#F7F7F8",
                  borderBottom: "1px solid #D6D8DB",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#D6D8DB",
                  },
                }}
              >
                {each.name}
              </Typography>
            );
          })}
        </Stack>
      ) : null}
    </Stack>
  );
};
