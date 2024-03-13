"use client";
import { SignUp } from "@/components/SignUp/SignUp";
import { Height } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useState } from "react";
import { MarketInfo } from "../../components/SignUp/MarketInfo";
import { LocationInfo } from "../../components/SignUp/LocationInfo";
import { MoreInfo } from "../../components/SignUp/MoreInfo";

export default function Page() {
  const [order, setOrder] = useState(1);
  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <SignUp setOrder={setOrder} order={order} />
      <MarketInfo order={order} setOrder={setOrder} />
      <LocationInfo order={order} setOrder={setOrder} />
      <MoreInfo order={order} setOrder={setOrder} />
    </Stack>
  );
}
