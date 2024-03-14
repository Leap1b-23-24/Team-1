import { CheckBox, CreateOutlined, DeleteOutline } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { IncomeFooter } from "./IncomeFooter";
import { IncomeFooterTop } from "./IncomeFooterTop";

export const IncomeFooterTopCom = () => {
  return (
    <Stack
      borderRadius="12px"
      bgcolor="white"
      direction={"column"}
      border="solid 1px #ECEDF0"
      width="50%"
    >
      <IncomeFooterTop />
      <IncomeFooter
        OrderId="1203213"
        Order="Zoloosoko0526@gmail.com"
        payee={345000}
        addedDate="2024-03-12"
      />
    </Stack>
  );
};
