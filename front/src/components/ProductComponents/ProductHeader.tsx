"use client";

import { PineWhite } from "@/assets/PineWhite";
import { NotificationsOutlined, PersonOutline } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export const ProductHeader = () => {
  return (
    <Stack
      width="100%"
      bgcolor="#121316"
      direction="row"
      justifyContent="space-between"
      py={1}
      px={3}
      alignItems="center"
    >
      <Stack>
        {" "}
        <PineWhite />
      </Stack>
      <Stack direction="row" gap={2} color="white">
        <NotificationsOutlined />
        <PersonOutline />
        <Typography>Username</Typography>
      </Stack>
    </Stack>
  );
};
