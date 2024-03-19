"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/theme";
import { AuthProvider } from "@/providers/AuthProvider";
import { ProductHeader, ProductSideBar } from "@/components/ProductComponents";
import { Stack } from "@mui/material";

import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AuthProvider>
          <ProductHeader />
          <Stack direction="row">
            <ProductSideBar />
            {children}
          </Stack>
        </AuthProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}
