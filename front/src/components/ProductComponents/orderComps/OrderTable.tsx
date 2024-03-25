"use client";
import { OrderDetailType, useOrder } from "@/providers/OrderProvider";
import { ArrowRight } from "@mui/icons-material";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { useEffect, useState } from "react";

type Column = {
  id:
    | "_id"
    | "orderer"
    | "createdAt"
    | "status"
    | "amountToBePaid"
    | "orderDetail";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
};

const columns: readonly Column[] = [
  { id: "_id", label: "Захиалгын ID дугаар", minWidth: 200, align: "left" },
  { id: "orderer", label: "Үйлчлүүлэгч", minWidth: 170, align: "left" },
  {
    id: "createdAt",
    label: "Огноо",
    minWidth: 170,
    align: "left",
  },
  {
    id: "createdAt",
    label: "Цаг",
    minWidth: 170,
    align: "left",
  },
  {
    id: "amountToBePaid",
    label: "Төлбөр",
    minWidth: 170,
    align: "left",
  },
  {
    id: "status",
    label: "Статус",
    minWidth: 170,
    align: "left",
  },
  { id: "orderDetail", label: "Дэлгэрэнгүй", minWidth: 100, align: "left" },
];

export const OrderTable = () => {
  const [orders, setOrders] = useState<OrderDetailType[]>([]);
  const { getOrders } = useOrder();

  useEffect(() => {
    getOrders({ setOrders: setOrders });
  }, []);

  return (
    <Stack width={"100%"} height={"100%"}>
      <TableContainer sx={{ maxHeight: "80%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((each) => {
                return (
                  <TableCell
                    key={each.id}
                    align={each.align}
                    style={{ minWidth: each.minWidth }}
                    onClick={() => {
                      console.log(orders);
                    }}
                  >
                    {each.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.length === 0
              ? null
              : orders.map((order) => {
                  console.log(order);
                  return (
                    <TableRow>
                      <TableCell>{order._id}</TableCell>
                      <TableCell>{order.orderer}</TableCell>
                      <TableCell>
                        {order.createdAt
                          ? format(order.createdAt, "yyyy-MM-dd")
                          : null}
                      </TableCell>
                      <TableCell>
                        {order.createdAt
                          ? format(order.createdAt, "hh-mm")
                          : null}
                      </TableCell>
                      <TableCell>{order.amountToBePaid}</TableCell>
                      <TableCell sx={{ fontWeight: 800 }}>
                        {order.status}
                      </TableCell>
                      <TableCell>
                        <ArrowRight />
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
