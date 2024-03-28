import { Grid, Stack } from "@mui/material";
import React from "react";
import { BarChartContainer } from "./ChartOptions";
import { SalesBarChart } from "./SellBar";
import { AreasBarChart } from ".";
export const ChartContainer = () => {
  return (
    <Stack width={"100%"} gap={2}>
      <BarChartContainer title="Борлуулалт">
        <SalesBarChart />
      </BarChartContainer>
      <BarChartContainer title="Идэвхтэй бүс нутаг">
        <AreasBarChart />
      </BarChartContainer>
    </Stack>
  );
};
