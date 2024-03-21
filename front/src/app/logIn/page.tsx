import { LogIn } from "@/components/logIn/LogIn";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <LogIn />
    </Stack>
  );
}
