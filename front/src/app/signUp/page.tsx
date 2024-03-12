"use client"
import { SignUp } from "@/components/SignUp/SignUp";
import { Height } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useState } from "react";
import { MarketInfo } from "./MarketInfo";

export default function Page (){
    const [order, setOrder] = useState(1);
    return(
        <Stack width={"100vw"} height={"100vh"} alignItems={"center"} justifyContent={"center"}>
            <SignUp setOrder={setOrder} order={order}/>
            <MarketInfo order={order} setOrder={setOrder}/>
        </Stack>
    )
}