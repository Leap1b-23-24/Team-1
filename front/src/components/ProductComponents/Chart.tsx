"use client";
import { Stack } from "@mui/material";
import React from "react";
import { Bar } from "react-chartjs-2";
export const options = {
  indexAxis: "y" as const,
  elements: { bar: { borderWidth: 2 } },
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false, text: "Chart.js Horizontal Bar Chart" },
  },
  barPercentage: 0.4,
};
const labels = ["Улаанбаатар", "Дархан", "Эрдэнэт ", "Бусад"];
export const data = {
  labels,
  datasets: [
    {
      labels,
      data: [10, 20, 30, 40, 50],
      backgroundColor: "rgba(0,0,0,1)",
      barRoundness: 100,
      borderRadius: 100,
      borderWidth: 1,
      borderSkipped: false,
    },
  ],
};
export const AreasBarChart = () => {
  return (
    <Stack>
      {" "}
      <Bar options={options} data={data} />{" "}
    </Stack>
  );
};
