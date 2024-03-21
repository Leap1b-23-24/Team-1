"use client";
import { ArrowForward } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import { SignUpInput } from "../SignUp/SignUpInput";

const validationSchema = yup.object({
  email: yup.string().email(),
  password: yup.string(),
});

export const LogIn = () => {
  const { logIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      logIn(values);
    },
  });

  return (
    <Stack
      width={440}
      p={5}
      gap={3}
      borderRadius={2.5}
      border={"1px solid #ECEDF0"}
    >
      <Typography fontSize={32} fontWeight={700}>
        Бүртгүүлэх
      </Typography>
      <SignUpInput
        name="email"
        value={formik.values.email}
        label="Таны имэйл "
        placeholder="Имэйл"
        onChange={formik.handleChange}
      />

      <SignUpInput
        name="password"
        type="password"
        value={formik.values.password}
        label="Нууц үг"
        placeholder="********"
        onChange={formik.handleChange}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ position: "relative", p: "16px 20px" }}
        disabled={!formik.values.email || !formik.values.password}
        onClick={() => {
          formik.handleSubmit();
        }}
      >
        <Typography fontSize={18}>Нэвтрэх</Typography>
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
        <Link
          href={"/dashboard/signUp"}
          style={{ textDecorationColor: "#121316" }}
        >
          <Typography color={"#121316"}>Бүртгүүлэх</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};
