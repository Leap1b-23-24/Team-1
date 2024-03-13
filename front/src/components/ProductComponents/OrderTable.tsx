"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, Typography } from "@mui/material";

function createData(
  //   name: string,
  OrderId: string,
  customer: string,
  addedDate: string,
  addedTime: string,
  payment: number,
  status: string
) {
  return { OrderId, customer, addedDate, addedTime, payment, status };
}

const rows = [
  createData(
    "312312312",
    "Zoloo soko",
    "2023-01-09",
    "10:58",
    12.0,
    "Хүргэгдсэн"
  ),
  createData(
    "312312312",
    "Zoloo soko",
    "2023-01-09",
    "10:58",
    12000,
    "Хүргэгдсэн"
  ),
  //   createData(
  //     "312312312",
  //     "Zoloo soko",
  //     "2023-01-09",
  //     "10:58",
  //     12.0,
  //     "Хүргэгдсэн"
  //   ),
  //   createData(
  //     "312312312",
  //     "Zoloo soko",
  //     "2023-01-09",
  //     "10:58",
  //     12.0,
  //     "Хүргэгдсэн"
  //   ),
  //   createData(
  //     "312312312",
  //     "Zoloo soko",
  //     "2023-01-09",
  //     "10:58",
  //     12.0,
  //     "Хүргэгдсэн"
  //   ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <Stack p={2}>
            <Typography fontWeight={700} fontSize={"20px"}>
              Захиалга
            </Typography>
          </Stack>
        </TableHead>
        <TableHead>
          <TableRow sx={{ bgcolor: "#F7F7F8" }}>
            <TableCell>Захиалгын ID дугаар</TableCell>
            <TableCell>Үйлчлүүлэгч</TableCell>
            <TableCell>Огноо</TableCell>
            <TableCell>Цаг</TableCell>
            <TableCell>Төлбөр</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell>Дэлгэрэнгүй</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.OrderId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography fontWeight={600}>#{row.OrderId}</Typography>
              </TableCell>
              {/* <TableCell align="right">{row.OrderId}</TableCell> */}
              <TableCell>
                <Typography fontWeight={600}>{row.customer}</Typography>
              </TableCell>
              <TableCell>{row.addedDate}</TableCell>
              <TableCell>{row.addedTime}</TableCell>
              <TableCell>{row.payment}₮ </TableCell>
              <TableCell>
                <Stack
                  p={1}
                  borderRadius={"24px"}
                  width={"fit-content"}
                  bgcolor={"#C1E6CF"}
                >
                  {row.status}
                </Stack>
              </TableCell>
              <TableCell>&#62;</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
