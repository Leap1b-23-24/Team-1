import { SignUpType } from "@/components/SignUp/SignUp"
import { Stack, Typography } from "@mui/material"

export const MarketInfo = (props: SignUpType) => {
    const{order, setOrder} = props;
    return(
        <Stack display={order===2?"flex":"none"} gap={20}>
                <Stack direction={"row"} alignItems={"center"}>
                    <Stack width={36} height={36} alignItems={"center"} justifyContent={"center"} borderRadius={"100%"} bgcolor={"#121316"} color={"white"}>1</Stack>
                    <Stack width={274} height={4} bgcolor={"#1C202414"}/>
                    <Stack width={36} height={36} alignItems={"center"} justifyContent={"center"} borderRadius={"100%"} bgcolor={"#121316"} color={"white"}>1</Stack>
                    <Stack width={274} height={4} bgcolor={"#1C202414"}/>
                    <Stack width={36} height={36} alignItems={"center"} justifyContent={"center"} borderRadius={"100%"} bgcolor={"#121316"} color={"white"}>1</Stack>
                   
                </Stack>
                
        </Stack>
    )
}