import { Stack } from "@mui/material";
import { Header, UnderHeader } from ".";

export const WholeHeader = () => {
  return (
    <Stack width={1}>
      <Header />
      <UnderHeader />
    </Stack>
  );
};
