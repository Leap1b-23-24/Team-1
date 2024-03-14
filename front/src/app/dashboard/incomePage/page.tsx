import {
  IncomeFooter,
  IncomeFooterTopCom,
  IncomeHeader,
} from "@/components/ProductComponents";
import { Stack } from "@mui/material";

export default function IncomePage() {
  return (
    <Stack width="100%" bgcolor="#F7F7F8">
      <Stack paddingTop={2} gap={1} width="100%" alignItems="center">
        <IncomeHeader />
        <IncomeFooterTopCom />
      </Stack>
    </Stack>
  );
}
