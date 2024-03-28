import { Divider, Icon, Stack, SvgIconProps, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export type DashboardCardType = {
  name: string;
  number: number;
  icon: React.ElementType<SvgIconProps>;
};

export default function DashboardInformation(props: DashboardCardType) {
  const { name, number, icon: IconComponent } = props;
  return (
    <Stack
      height={"166px"}
      width={"100%"}
      borderRadius={"12px"}
      border="solid, 1px, #ECEDF0"
      bgcolor={"#FFFFFF"}
      p={3}
    >
      <Stack justifyContent={"center"} gap={2}>
        <Stack flexDirection={"row"} gap={1}>
          <IconComponent />
          <Typography fontWeight={600} fontSize={"16px"}>
            {name}
          </Typography>
        </Stack>
        <Typography fontWeight={700} fontSize={"32px"}>
          {number}
        </Typography>
        <Typography fontWeight={400} fontSize={"14px"}>
          Өнөөдөр
        </Typography>
      </Stack>
    </Stack>
  );
}
