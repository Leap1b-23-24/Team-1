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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useOrder } from "@/providers/OrderProvider";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
export const Header = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserName(token, setUserName);
    }
  }, []);
  const { getUserName } = useAuth();
  const [buckets, setBucket] = useState<number>(0);
  const { isBucketAdded } = useOrder();
  useEffect(() => {
    let array = localStorage.getItem("bucket");
    if (!array) {
      setBucket(0);
    } else {
      let bucket = JSON.parse(array);
      setBucket(bucket.length);
    }
  }, [isBucketAdded]);
  const router = useRouter();
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
            <Link href={"/logIn"} style={{ textDecoration: "none" }}>
              <Stack
                flexDirection={"row"}
                gap={"3px"}
                fontSize={"24px"}
                color={"#F1F1F1"}
                alignItems={"center"}
              >
                <Typography fontSize={16} fontWeight={600}>
                  {userName ? userName : "  Нэвтрэх"}
                </Typography>
                <PermIdentityIcon fontSize="small" />
              </Stack>
            </Link>
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
            <IconButton
              sx={{ position: "relative" }}
              size="small"
              onClick={() => {
                router.push("/bucket");
              }}
            >
              {buckets === 0 ? null : (
                <Stack
                  zIndex={1}
                  paddingX={0.5}
                  sx={{ aspectRatio: "1/1" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  position={"absolute"}
                  color={"white"}
                  bgcolor={"#33CF38"}
                  fontSize={10}
                  fontWeight={800}
                  borderRadius={"50%"}
                  top={0}
                  right={0}
                >
                  {buckets}
                </Stack>
              )}
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
