import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type array = {
  name: String;
};

type CustomSelectType = {
  placeHolder: string;
  selections: array[];
};

export const Selection = (props: CustomSelectType) => {
  const { placeHolder, selections } = props;
  return (
    <Stack width={384} height={48} p={"8px 16px"} bgcolor={"#ECEDF0"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"}>
          <Image
            src={"/svg/location.svg"}
            width={24}
            height={24}
            alt="location icon"
          />
          <Typography color={"#8B8E95"}>{placeHolder}</Typography>
        </Stack>
        <Image
          src={"/svg/arrow_forward_ios.svg"}
          width={24}
          height={24}
          alt="see selection icon"
        />
      </Stack>
      <Stack>
        {selections.map((item) => {
          return (
            <Stack direction={"row"}>
              <Image
                src={"/svg/location.svg"}
                width={24}
                height={24}
                alt="location icon"
              />
              <Typography color={"#8B8E95"}>{item.name}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
