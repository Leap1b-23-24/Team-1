"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Userprovider } from "@/providers/UserProvider";
import { AuthProvider } from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline>
          <AuthProvider>
            <Userprovider>
              {/* <ThemeProvider theme={theme}> */}

              {children}
              <ToastContainer />
            </Userprovider>
          </AuthProvider>
        </CssBaseline>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
