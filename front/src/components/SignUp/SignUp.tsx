"use client";
import { ArrowForward } from "@mui/icons-material";
import {
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { SignUpInput } from "./SignUpInput";
import { useAuth } from "@/providers/AuthProvider";
import { toast } from "react-toastify";

export type SignUpType = {
  setOrder: Dispatch<SetStateAction<number>>;
  order: number;
};

export const SignUp = (props: SignUpType) => {
  const { order, setOrder } = props;
  const {
    email,
    setEmail,
    userName,
    setUserName,
    password,
    setPassword,
    userRole,
    setUserRole,
  } = useAuth();
  const [rePass, setRePass] = useState("");

  const checker = (email: string, password: string, rePass: string) => {
    if (!email.includes("@" || ".com")) {
      toast.warning("Та имэйл хаягаа зөв оруулна уу");
    } else if (password.length <= 8) {
      toast.warning("Нууц үг дор хаяж 8 тэмдэгт агуулна");
    } else if (password !== rePass) {
      toast.warning("Ижил нууц үг оруулна уу");
    }
  };
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment === null) return;
    setUserRole(newAlignment);
  };

  return (
    <Stack
      display={order === 1 ? "flex" : "none"}
      width={440}
      p={5}
      gap={3}
      borderRadius={2.5}
      border={"1px solid #ECEDF0"}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography fontSize={32} fontWeight={700}>
          Бүртгүүлэх
        </Typography>
        <ToggleButtonGroup
          sx={{ height: 36 }}
          color="primary"
          value={userRole}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value={"Борлуулагч"} sx={{ fontSize: 8 }}>
            Борлуулагч
          </ToggleButton>
          <ToggleButton
            value={"Худалдан авагч"}
            sx={{
              fontSize: 8,
            }}
          >
            Худалдан авагч
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <SignUpInput
        value={email}
        label="Таны имэйл "
        placeholder="Имэйл"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <SignUpInput
        value={userName}
        label="Таны нэр "
        placeholder="Нэр"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <SignUpInput
        type="password"
        value={password}
        label="Нууц үг"
        placeholder="********"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <SignUpInput
        type="password"
        value={rePass}
        label="Нууц үг давтах"
        placeholder="********"
        onChange={(event) => {
          setRePass(event.target.value);
        }}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ position: "relative", p: "16px 20px" }}
        disabled={!email || !userName || !password || !rePass}
        onClick={() => {
          checker(email, password, rePass);
        }}
      >
        <Typography fontSize={18}>Дараах</Typography>
        <ArrowForward sx={{ position: "absolute", right: "20px" }} />
      </Button>
      <Stack width={"100%"} height={2} bgcolor={"#ECEDF0"} />
      <Stack
        direction={"row"}
        width={"100%"}
        p={"12px 16px"}
        gap={1}
        borderRadius={1}
        bgcolor={"#1C20240A"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src={"/google.svg"} alt="" width={24} height={24} />
        <Typography fontSize={16} color={"#121316"}>
          Google-ээр нэвтрэх
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        width={"100%"}
        p={"12px 16px"}
        gap={1}
        borderRadius={1}
        bgcolor={"#1C20240A"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src={"/microsoft.svg"} alt="" width={24} height={24} />
        <Typography fontSize={16} color={"#121316"}>
          Microsoft-оор нэвтрэх
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        width={"100%"}
        p={"12px 16px"}
        gap={1}
        borderRadius={1}
        bgcolor={"#1C20240A"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src={"/apple.svg"} alt="" width={24} height={24} />
        <Typography fontSize={16} color={"#121316"}>
          Apple-аар нэвтрэх
        </Typography>
      </Stack>
      <Stack width={"100%"} height={2} bgcolor={"#ECEDF0"} />
      <Stack direction={"row"} gap={0.5} p={5} justifyContent={"center"}>
        <Typography color={"#525252"}>Бүртгэлтэй юу?</Typography>
        <Link href={"/logIn"} style={{ textDecorationColor: "#121316" }}>
          <Typography color={"#121316"}>Нэвтрэх</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};
