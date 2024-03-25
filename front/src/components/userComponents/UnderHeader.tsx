"use client";
import { KeyboardArrowDown, Search } from "@mui/icons-material";
import {
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export const UnderHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Stack bgcolor={"common.white"} py={"19px"} width={1}>
      <Container maxWidth="lg">
        <Stack width={1} flexDirection={"row"} justifyContent={"space-between"}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={"58px"}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontSize={34}
              fontWeight={700}
              color={"#0D0E43"}
              onClick={() => {
                router.push("/");
              }}
            >
              Ecommerce
            </Typography>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                color={pathname.includes("sort") ? "#0D0E43" : "#FB2E86"}
                sx={{ display: "flex", alignItems: "center" }}
                onClick={() => {
                  router.push("/");
                }}
              >
                Нүүр
                <KeyboardArrowDown />
              </Typography>
              <Typography
                color={!pathname.includes("sort") ? "#0D0E43" : "#FB2E86"}
                onClick={() => {
                  router.push("/sort");
                }}
              >
                Ангилал
              </Typography>
            </Stack>
          </Stack>
          <TextField
            placeholder="Хайлт..."
            type="search"
            //    onChange={(event) => {
            //      setSearchValue(event.target.value);
            //    }}
            inputProps={{
              style: {
                padding: "14px 20px",
                paddingRight: "40px",
              },
            }}
            InputProps={{
              style: {
                backgroundColor: "#FFF",
                position: "relative",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <Stack
                    position={"absolute"}
                    right={0}
                    bgcolor={"#FB2E86"}
                    borderRadius={"4px"}
                    p={1.3}
                    sx={{ cursor: "pointer" }}
                  >
                    <Typography color={"#EEEFFB"}>
                      <Search />
                    </Typography>
                  </Stack>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Container>
    </Stack>
  );
};
