"use client";
import { PhoneInTalkOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Badge,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
export const Header = () => {
  return (
    <Stack
      bgcolor={"#7E33E0"}
      py={"2px"}
      width={1}
      height={"44px"}
      alignItems={"center"}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box
          height={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack flexDirection={"row"} gap={"66px"}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              gap={1.25}
              color={"#F1F1F1"}
            >
              <MailOutlineIcon fontSize="small" />
              <Typography fontSize={16} fontWeight={600}>
                info@ecommerce.mn
              </Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              gap={1.25}
              color={"#F1F1F1"}
            >
              <PhoneInTalkOutlined fontSize="small" />
              <Typography fontSize={16} fontWeight={600}>
                info@ecommerce.mn
              </Typography>
            </Stack>
          </Stack>
          <Stack flexDirection={"row"} alignItems={"center"} gap={"29px"}>
            <Stack
              flexDirection={"row"}
              gap={"3px"}
              fontSize={"24px"}
              color={"#F1F1F1"}
              alignItems={"center"}
            >
              <Typography fontSize={16} fontWeight={600}>
                Нэвтрэх
              </Typography>
              <PermIdentityIcon fontSize="small" />
            </Stack>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              gap={"3px"}
              fontSize={"24px"}
              color={"#F1F1F1"}
            >
              <Typography fontSize={16} fontWeight={600}>
                Хадгалах
              </Typography>
              <FavoriteBorderIcon fontSize="small" />
            </Stack>
            <IconButton size="small">
              <Badge color="warning">
                <ShoppingCartOutlined
                  style={{ color: "white" }}
                  fontSize="small"
                  color="inherit"
                />
              </Badge>
            </IconButton>
          </Stack>
        </Box>
      </Container>
      <Container maxWidth="lg"></Container>
    </Stack>
  );
};
