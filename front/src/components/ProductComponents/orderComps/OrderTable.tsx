import {
  Stack,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { formatDate } from "date-fns";
import { date } from "yup";

type Column = {
  id: "id" | "user" | "date" | "time" | "status" | "more";
  label: string;
  minWidth?: number;
  align?: "right" | "left";
  format?: (value: number) => string;
  date?: (date: Date) => string;
};

const columns: readonly Column[] = [
  { id: "id", label: "Захиалгын ID дугаар", minWidth: 170 },
  { id: "user", label: "Үйлчлүүлэгч", minWidth: 100 },
  {
    id: "date",
    label: "Огноо",
    minWidth: 170,
    align: "left",
    date: (value: Date) => formatDate(value, "yyyy-MM-dd"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

export const OrderTable = () => {
  return (
    <Stack width={"100%"}>
      <TableContainer sx={{ maxHeight: "80%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Stack>
  );
};
