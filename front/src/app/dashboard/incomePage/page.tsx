import {
  IncomeFooter,
  IncomeFooterTopCom,
  IncomeHeader,
} from "@/components/ProductComponents";
import { Stack } from "@mui/material";

export default function IncomePage() {
  return (
    <Stack width="100%" bgcolor="#F7F7F8" height="95vh" alignItems="center">
      <Stack
        paddingTop={2}
        gap={1}
        width="100%"
        maxWidth={1440}
        padding={3}
        // justifyContent="center"

        // height="100%"
      >
        <IncomeHeader />
        <IncomeFooterTopCom />
      </Stack>
    </Stack>
  );
}
