import { ArrowForward } from "@mui/icons-material"
import { Button, Stack, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export type SignUpType ={
    setOrder: Dispatch<SetStateAction<number>>;
    order:number;
}

export const SignUp = (props:SignUpType) => {
    const{order, setOrder} = props;
    return(
        <Stack display={order===1?"flex":"none"} width={440} p={5} gap={3} borderRadius={2.5} border={"1px solid #ECEDF0"} alignItems={"center"} >
            <Typography fontSize={32} fontWeight={700}>Бүртгүүлэх</Typography>

            <Button variant="contained" fullWidth sx={{position:"relative",p:"16px 20px"}} >
                <Typography fontSize={18} onClick={()=>{
                    setOrder(2);
                }}>Дараах</Typography>
            <ArrowForward sx={{position:"absolute", right:"20px"}}/>
            </Button>
            <Stack width={"100%"} height={2} bgcolor={"#ECEDF0"}/>
            <Stack direction={"row"} width={"100%"} p={"12px 16px"} gap={1} borderRadius={1} bgcolor={"#1C20240A"} alignItems={"center"} justifyContent={"center"}>
                <Image src={"/google.svg"} alt="" width={24} height={24}/>
                <Typography fontSize={16} color={"#121316"}>Google-ээр нэвтрэх</Typography>
            </Stack>
            <Stack direction={"row"} width={"100%"} p={"12px 16px"} gap={1} borderRadius={1} bgcolor={"#1C20240A"} alignItems={"center"} justifyContent={"center"}>
                <Image src={"/microsoft.svg"} alt="" width={24} height={24}/>
                <Typography fontSize={16} color={"#121316"}>Microsoft-оор нэвтрэх</Typography>
            </Stack>
            <Stack direction={"row"} width={"100%"} p={"12px 16px"} gap={1} borderRadius={1} bgcolor={"#1C20240A"} alignItems={"center"} justifyContent={"center"}>
                <Image src={"/apple.svg"} alt="" width={24} height={24}/>
                <Typography fontSize={16} color={"#121316"}>Apple-аар нэвтрэх</Typography>
            </Stack>
            <Stack width={"100%"} height={2} bgcolor={"#ECEDF0"}/>
            <Stack direction={"row"} gap={.5} p={5}>
                <Typography color={"#525252"}>Бүртгэлтэй юу?</Typography>
                <Link href={""} style={{textDecorationColor:"#121316"}}>
                <Typography color={"#121316"} >Нэвтрэх</Typography>
                </Link>
            </Stack>
        </Stack>
    )
}