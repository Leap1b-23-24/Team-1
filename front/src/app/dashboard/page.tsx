"use client";
import { DashboardProduct } from "@/components/DashboardComponents/DashboardProduct";
import { useAuth } from "@/providers/AuthProvider";
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
      height="95vh"
      width="100%"
    >
      <Stack gap={3} direction="row"></Stack>
      <Stack width={700}>
        <DashboardProduct />
      </Stack>
    </Stack>
  );
}
