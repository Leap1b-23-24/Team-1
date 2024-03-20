" use client";

import React, { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const salesData = [
  {
    date: "2024-03-08T06:36:47.366Z",
    value: 139000,
  },

  {
    date: "2024-03-13T06:36:47.366Z",
    value: 125000,
  },

  {
    date: "2024-03-14T06:36:47.366Z",
    value: 300000,
  },

  {
    date: "2024-03-12T06:36:47.366Z",
    value: 126300,
  },

  {
    date: "2024-03-11T06:36:47.366Z",
    value: 250000,
  },

  {
    date: "2024-03-10T06:36:47.366Z",
    value: 250600,
  },

  {
    date: "2024-03-09T06:36:47.366Z",
    value: 390000,
  },
];

export const options = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    y: {
      stacked: false,
    },
  },

  barPercentage: 0.2,

  chartArea: {
    backgroundColor: "rgba(255, 88, 255, 0.2)",
  },
};

const lastSevenMonthAndDates = getLastSevenMonthAndDates();
const today = new Date();
const lastSevenSalesData = salesData.map((item) => {
  return item;
});

const sortedData = salesData.sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);

const sortDataDays = () => {
  return sortedData.map((item) => {
    const dateObject = new Date(item.date);
    const stringDate = getMonthAndDay(dateObject);
    item.date = stringDate;
    console.log("string date", stringDate);
    return item.date;
  });
};

const sortDataValues = () => {
  return sortedData.map((item) => {
    const dateObject = new Date(item.date);

    const stringDate = getMonthAndDay(dateObject);

    item.date = stringDate;

    console.log("string date", stringDate);

    return item.value;
  });
};

const days = sortedData.map((item) => {
  const dateObject = new Date(item.date);

  const stringDate = getMonthAndDay(dateObject);

  return stringDate;
});

const values = sortedData.map((item) => {
  return item.value;
});

export const data = {
  labels: days,

  datasets: [
    {
      label: "# of Votes",
      data: values,
      backgroundColor: "rgba(0,0,0,1)",
      barRoundness: 100,
      borderRadius: 100,
      borderWidth: 1,
      borderSkipped: false,
    },
  ],
};
const salesDataValues = salesData.map((item) => {
  const dateObject = new Date(item.date);
  const stringDate = getMonthAndDay(dateObject);
  item.date = stringDate;
  console.log("string date", stringDate);
  return item.value;
});

export const SalesBarChart = () => {
  return <Bar options={options} data={data} />;
};

function getLastSevenMonthAndDates() {
  const dates = [];
  let currentDate = new Date();
  for (let i = 0; i < 7; i++) {
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    dates.push(
      `${month.toString().padStart(2, "0")}/${date.toString().padStart(2, "0")}`
    );
    currentDate.setDate(currentDate.getDate() - 1);
  }
  return dates.reverse();
}
function getMonthAndDay(prop: Date) {
  const month = prop.getMonth() + 1;
  const day = prop.getDate();
  return (
    month.toString().padStart(2, "0") + "/" + day.toString().padStart(2, "0")
  );
}
