"use client";

import { Selection } from "@/components/SignUp/Selection";
import { List, ViewList, Widgets, Window } from "@mui/icons-material";
import { MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const selections = ["T-Shirt", "Jeans", "Coat"];

export const SortTop = () => {
  const [sort, setSort] = useState("");
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack>
        <Typography fontSize={22} fontWeight={600} color={"#151875"}>
          Ecommerce Acceories & Fashion item{" "}
        </Typography>
        <Typography fontSize={12} color={"#8A8FB9"}>
          About 9,620 results (0.62 seconds)
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={2}>
        <Stack direction={"row"} gap={0.5}>
          <Typography color={"#3F509E"}>Per Page:</Typography>

          <TextField
            type="number"
            sx={{ width: "56px", borderColor: "#E7E6EF" }}
            InputProps={{ style: { height: "25px" } }}
          />
        </Stack>
        <Stack direction={"row"} gap={0.5}>
          <Typography color={"#3F509E"}>Sort By:</Typography>
          <Select
            value={sort}
            placeholder="Best Match"
            sx={{ color: "#8A8FB9", height: "25px", fontSize: 12 }}
            onChange={(event) => {
              setSort(event.target.value);
            }}
          >
            {selections.map((item, index) => {
              return (
                <MenuItem value={item} sx={{ fontSize: 12, color: "#8A8FB9" }}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </Stack>
        <Stack direction={"row"} gap={0.5} alignItems={"center"}>
          <Typography color={"#3F509E"}>View:</Typography>
          <Window sx={{ width: "16px", height: "16px", color: "#151875" }} />
          <ViewList sx={{ width: "16px", height: "16px", color: "#151875" }} />
        </Stack>
      </Stack>
    </Stack>
  );
};
