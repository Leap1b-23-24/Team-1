import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export const AddComment = () => {
  const [value, setValue] = useState<number | null>(2);

  return (
    <Stack width={"100%"} gap={3}>
      <Typography color={"#1D3178"} fontSize={"18px"} fontWeight={800}>
        {"Үнэлгээ нэмэх"}
      </Typography>
      <Stack
        width={"100%"}
        bgcolor={"white"}
        borderRadius={"8px"}
        px={3}
        py={6}
        gap={5}
      >
        <Stack width={"100%"} borderBottom={"solid 2px #BFC6E0"} padding={2}>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </Stack>
        <Stack width={"100%"} borderBottom={"solid 2px #BFC6E0"}>
          <TextField
            placeholder="Сэтгэгдэл бичих"
            type="text"
            sx={{
              "& fieldset": { border: "none" },
            }}
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          {" "}
          <Button
            variant="contained"
            sx={{
              background: "#FB2E86",
              width: "fit-content",
            }}
          >
            {"Үнэлэх"}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
