"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
const statusMap = {
  delivered: {
    backgroundColor: "#C1E6CF",
    color: "#0A4E22",
    title: "Хүргэгдсэн",
  },
  neworder: {
    backgroundColor: "#FFFFFF",
    color: "text.secondary",
    title: "Шинэ захиалга",
  },
  ondelivery: {
    backgroundColor: "#B7DDFF",
    color: "#1890FF",
    title: "Хүргэлтэнд гарсан",
  },
  inprogress: {
    backgroundColor: "#ECEDF0",
    color: "text.secondary",
    title: "Бэлтгэгдэж байна",
  },
};

function createData(
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
];

export default function BasicTable() {
  const router = useRouter();

  const [status, setStatus] =
    React.useState<keyof typeof statusMap>("delivered");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as keyof typeof statusMap);
  };
  return (
    <TableContainer component={Paper} sx={{ borderRadius: "12px" }}>
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
              <TableCell>
                <Typography fontWeight={600}>{row.customer}</Typography>
              </TableCell>
              <TableCell>{row.addedDate}</TableCell>
              <TableCell>{row.addedTime}</TableCell>
              <TableCell>{row.payment}₮ </TableCell>
              <TableCell>
                <Select
                  value={status}
                  onChange={handleChange}
                  sx={{
                    borderRadius: "50px",
                    backgroundColor:
                      statusMap[status as keyof typeof statusMap]
                        .backgroundColor,
                    color: statusMap[status as keyof typeof statusMap].color,
                    height: "32px",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  {Object.keys(statusMap).map((item) => {
                    return (
                      <MenuItem key={item} value={item}>
                        {statusMap[item as keyof typeof statusMap].title}
                      </MenuItem>
                    );
                  })}
                </Select>
              </TableCell>
              <TableCell
                onClick={() =>
                  router.push("/dashboard/orderPage/orderDetailPage")
                }
                sx={{ cursor: "pointer" }}
              >
                <ArrowForwardIosOutlined />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// [12:45 PM] Baljinnyam Buyanjargal
// "use client";

// import {
//   MenuItem,
//   Select,
//   SelectChangeEvent,
//   Stack,
//   Typography,
// } from "@mui/material";
// import { number } from "yup";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const statusMap = {
//   delivered: {
//     backgroundColor: "#C1E6CF",
//     color: "#0A4E22",
//     title: "Хүргэгдсэн",
//   },
//   neworder: {
//     backgroundColor: "#FFFFFF",
//     color: "text.secondary",
//     title: "Шинэ захиалга",
//   },
//   ondelivery: {
//     backgroundColor: "#B7DDFF",
//     color: "#1890FF",
//     title: "Хүргэлтэнд гарсан",
//   },
//   inprogress: {
//     backgroundColor: "#ECEDF0",
//     color: "text.secondary",
//     title: "Бэлтгэгдэж байна",
//   },
// };

// type OrderDetailsType = {
//   orderID: string | number;
//   name: string;
//   user: string;
//   date: string;
//   time: number;
//   price: number;
//   s: string;
// };
// type IndexType = {
//   index: number;
// };

// export const OrderDetails = (props: OrderDetailsType & IndexType) => {
//   console.log(props);

//   const { orderID, user, date, price, time, name, s } = props;

//   const [status, setStatus] = useState<keyof typeof statusMap>("delivered");

//   const handleChange = (event: SelectChangeEvent) => {
//     setStatus(event.target.value as keyof typeof statusMap);
//   };
//   console.log(statusMap[status]);
//   //   useEffect(() => {
//   //     setStatus(s);
//   //   }, []);
//   return (
//     <Stack
//       direction={"row"}
//       height={72}
//       justifyContent={"center"}
//       sx={{
//         display: "grid",
//         gridTemplateColumns: "5fr 5fr 3fr 3fr 3fr 5fr 4fr",
//         gap: 1,
//         borderBottom: 1,
//         borderColor: "divider",
//         fontSize: "14px",
//         fontWeight: "400",
//         color: "text.primary",
//       }}
//     >
//       <Stack justifyContent={"center"} px={3}>
//         {orderID}
//       </Stack>
//       <Stack justifyContent={"center"} height={"100%"}>
//         <Typography fontSize={14} fontWeight={600}>
//           {name}
//         </Typography>
//         <Typography fontSize={14} fontWeight={400} color={"text.secondary"}>
//           {user}
//         </Typography>
//       </Stack>
//       <Stack justifyContent={"center"}>{date}</Stack>
//       <Stack justifyContent={"center"}>{time}</Stack>
//       <Stack justifyContent={"center"}>
//         {new Intl.NumberFormat().format(price) + "₮"}
//       </Stack>
//       <Stack justifyContent={"center"} width={"fit-content"}>
//         <Select
//           value={s}
//           onChange={handleChange}
//           sx={{
//             borderRadius: "50px",
//             backgroundColor:
//               statusMap[s as keyof typeof statusMap].backgroundColor,
//             color: statusMap[s as keyof typeof statusMap].color,
//             height: "32px",
//             fontSize: "14px",
//             fontWeight: "400",
//           }}
//         >
//           {Object.keys(statusMap).map((item) => {
//             return (
//               <MenuItem key={item} value={item}>
//                 {statusMap[item as keyof typeof statusMap].title}
//               </MenuItem>
//             );
//           })}
//         </Select>
//       </Stack>

//       <Stack justifyContent={"center"} alignItems={"center"}>
//         <Link href={"./"}>
//           <ArrowForwardIosIcon
//             fontSize="small"
//             sx={{ color: "text.secondary" }}
//           />
//         </Link>
//       </Stack>
//     </Stack>
//   );
// };
