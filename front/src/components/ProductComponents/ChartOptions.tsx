import { Stack } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { PropsWithChildren } from "react";
export const BarChartContainer = (
  props: PropsWithChildren & { title: string }
) => {
  const { children, title } = props;
  return (
    <Stack
      overflow={"hidden"}
      height={"100%"}
      width={"565px"}
      borderRadius={3}
      px={3}
      py={3}
      sx={{ backgroundColor: "#fff" }}
      gap={4}
    >
      <Stack direction={"row"}>
        <Stack
          justifyContent={"center"}
          flexGrow={1}
          fontSize={18}
          fontWeight={600}
        >
          {title}
        </Stack>
        <ChevronRightIcon />
      </Stack>
      <Stack>{children}</Stack>
    </Stack>
  );
};
