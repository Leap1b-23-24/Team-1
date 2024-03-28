"use client";
import { DashboardProduct } from "@/components/DashboardComponents/DashboardProduct";
import { ChartContainer } from "@/components/ProductComponents/ChartContainer";
import DashboardInformation from "@/components/ProductComponents/DashboardInfo";
import { useAuth } from "@/providers/AuthProvider";
import {
  AttachMoney,
  ContentPaste,
  Person2Outlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { merchantChecker } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const func = async () => {
      await merchantChecker();
    };

    func();

    setLoading(false);
  }, []);

  return (
    <Stack
      display={loading ? "none" : "flex"}
      bgcolor="#F7F7F8"
      gap={3}
      width="100%"
      p={2}
    >
      <Stack
        gap={3}
        direction="row"
        display={"grid"}
        gridTemplateColumns={"repeat(3,1fr)"}
      >
        <DashboardInformation name="Орлого" number={23100} icon={AttachMoney} />
        <DashboardInformation name="Захиалга" number={58} icon={ContentPaste} />
        <DashboardInformation
          name="Хэрэглэгч"
          number={980}
          icon={Person2Outlined}
        />
      </Stack>
      <Stack
        flexDirection={"row"}
        gap={3}
        display={"grid"}
        gridTemplateColumns={"repeat(2,1fr)"}
      >
        <DashboardProduct />
        <ChartContainer />
      </Stack>
    </Stack>
  );
}
