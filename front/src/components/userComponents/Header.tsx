import {
  Favorite,
  MenuOutlined,
  Search,
  SearchOutlined,
  ShoppingCart,
  Visibility,
} from "@mui/icons-material";
import {
  Container,
  InputAdornment,
  Menu,
  Stack,
  TextField,
} from "@mui/material";

const type = ["Хямдралтай", "Эрэгтэй", "Эмэгтэй", "Хүүхдийн"];

export const Header = () => {
  return (
    <Stack>
      <Stack width="100%" height="fit-content" bgcolor="#12A795">
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src="logo.png" alt=""></img>

          <TextField
            type="search"
            placeholder="Хайлт"
            variant="standard"
            sx={{
              background: "white",
              borderRadius: "8px",
              width: "30%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment sx={{ padding: "8px" }} position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />

          <Stack direction="row" alignItems="center" gap={2}>
            <Favorite sx={{ color: "white" }} />{" "}
            <ShoppingCart sx={{ color: "white" }} />{" "}
            <Stack
              width="40px"
              height="40px"
              borderRadius="50%"
              bgcolor="red"
            ></Stack>
          </Stack>
        </Container>
      </Stack>
      <Stack width="100%" height="30px" bgcolor="white" py="8px">
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4%",
          }}
        >
          <MenuOutlined />
          <Stack direction="row" gap={2}>
            {type.map((name, index) => {
              return (
                <Stack
                  key={index}
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  {name}
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};
