import { MenuItem, Select, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type array = {
  name: String;
};

type CustomSelectType = {
  placeHolder: string;
  selections: string[];
  setState: Dispatch<SetStateAction<string>>;
  state: string;
  label: string;
};

export const Selection = (props: CustomSelectType) => {
  const { placeHolder, selections, setState, state, label } = props;
  return (
    <Stack gap={1}>
      <Typography fontSize={16} fontWeight={600}>
        {label}
      </Typography>
      <Select
        value={state}
        placeholder={placeHolder}
        sx={{ color: "#000" }}
        onChange={(event) => {
          setState(event.target.value);
        }}
      >
        {selections.map((item: any) => {
          return (
            <MenuItem value={item}>
              <Stack direction={"row"} gap={1}>
                {" "}
                {item}
              </Stack>
            </MenuItem>
          );
        })}
      </Select>
    </Stack>
  );
};
