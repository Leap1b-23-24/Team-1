"use client";
import { OrderDetailType, useOrder } from "@/providers/OrderProvider";
import {
  ArrowDownward,
  ArrowDropDown,
  ArrowRight,
  Paid,
} from "@mui/icons-material";
import {
  Icon,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Column = {
  id: "_id" | "orderer" | "createdAt" | "amountToBePaid" | "orderDetail";
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
  { id: "orderDetail", label: "Дэлгэрэнгүй", minWidth: 100, align: "left" },
];

export const OrderTable = () => {
  const [orders, setOrders] = useState<OrderDetailType[]>([]);
  const { getOrders, setOrderId } = useOrder();
  const router = useRouter();

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
                      <TableCell>{order.orderer?.userName}</TableCell>
                      <TableCell>
                        {order.createdAt
                          ? format(order.createdAt, "yyyy-MM-dd")
                          : null}
                      </TableCell>
                      <TableCell>
                        {order.createdAt
                          ? format(order.createdAt, "hh:mm")
                          : null}
                      </TableCell>
                      <TableCell>{order.amountToBePaid}</TableCell>
                      <TableCell>
                        <Stack
                          width={"100%"}
                          alignItems={"flex-start"}
                          sx={{ cursor: "pointer" }}
                          onClick={() => {
                            if (order._id) {
                              setOrderId(order._id);
                              router.push(
                                "/dashboard/orderPage/orderDetailPage"
                              );
                            }
                          }}
                        >
                          <IconButton>
                            <ArrowRight />
                          </IconButton>
                        </Stack>
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
