import { Grid, Stack } from "@mui/material";
import React from "react";
import { BarChartContainer } from "./ChartOptions";
import { SalesBarChart } from "./SellBar";
import { AreasBarChart } from ".";
export const ChartContainer = () => {
  return (
    <Stack>
      <Grid container spacing={2} flexGrow={1} mb={3}>
        <Grid item xs={6} container spacing={2}>
          <Grid item xs={12}>
            <BarChartContainer title="Борлуулалт">
              <SalesBarChart />
            </BarChartContainer>
          </Grid>
          <Grid item xs={12}>
            <BarChartContainer title="Идэвхтэй бүс нутаг">
              <AreasBarChart />
            </BarChartContainer>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};
