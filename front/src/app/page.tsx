import { ShoppingCard } from "@/components/userComponents/ShoppingCard";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <Stack width={250}>
        <ShoppingCard
          image="/tshirt.jpeg"
          title="Guess цахилгаант цамц"
          price={58000}
          description="Чөлөөт цамц"
        />
      </Stack>
    </Stack>
  );
}
