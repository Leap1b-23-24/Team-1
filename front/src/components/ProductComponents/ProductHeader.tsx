"use client";
import { PineWhite } from "@/assets/PineWhite";
import { useAuth } from "@/providers/AuthProvider";
import { NotificationsOutlined, PersonOutline } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type ProductHeaderProps = {
  isShown: boolean;
};

export const ProductHeader = () => {
  const pathName = usePathname();
  const { getUserName } = useAuth();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserName(token, setUserName);
    }
  }, []);

  return (
    <Stack width="100%" display={pathName.includes("signUp") ? "none" : "flex"}>
      <Stack
        direction="row"
        px={3}
        py={1}
        bgcolor="#121316"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          <PineWhite />
        </Stack>
        <Stack direction="row" gap={2} color="white">
          <NotificationsOutlined />
          <PersonOutline />
          <Typography>{userName ? userName : "Нэвтрэх"}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
