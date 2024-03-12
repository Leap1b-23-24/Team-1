import { ShoppingCard } from "@/components/userComponents/ShoppingCard";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack width={"100%"} gap={4} alignItems={"center"} bgcolor={"#F7F7F8"}>
      {/* Header container */}
      <Stack width={"100%"} border={"1px solid green"} height={"100px"}>
        <Typography fontSize={20} color={"green"}>
          Headeree end hiigerei
        </Typography>
        {/* Text iig arilgaad hatuu unduriig ni bas arilgaad */}
      </Stack>
      {/* Main Container */}
      <Stack
        width={"70%"}
        maxWidth={1440}
        gap={4}
        border={"1px solid red"}
        padding={1}
      >
        {/* carousel container */}
        <Stack width={"100%"} height={557} border={"1px solid black"}>
          <Typography color={"black"}>Carousel container</Typography>
        </Stack>
        {/* Suggest container */}
        <Stack width={"100%"} border={"1px solid purple"} gap={3}>
          <Typography color={"#121316"} fontSize={28} fontWeight={700}>
            Санал болгож буй
          </Typography>
          <Stack
            width={"100%"}
            sx={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}
            gap={2}
          >
            <ShoppingCard
              image="/tshirt.jpeg"
              title="Guess цахилгаант цамц"
              price={58000}
              description="Чөлөөт цамц"
            />
            <ShoppingCard
              image="/tshirt.jpeg"
              title="Guess цахилгаант цамц"
              price={58000}
              description="Чөлөөт цамц"
            />
            <ShoppingCard
              image="/tshirt.jpeg"
              title="Guess цахилгаант цамц"
              price={58000}
              description="Чөлөөт цамц"
            />
            <ShoppingCard
              image="/tshirt.jpeg"
              title="Guess цахилгаант цамц"
              price={58000}
              description="Чөлөөт цамц"
            />
            <ShoppingCard
              image="/tshirt.jpeg"
              title="Guess цахилгаант цамц"
              price={58000}
              description="Чөлөөт цамц"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
