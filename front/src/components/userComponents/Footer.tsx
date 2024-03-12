// // export default function Footer(){
// //     return <div className="">

// //     </div>
// // }
// "use client";
// import { useRouter } from "next/navigation";

// const ancherData = [
//   "Холбоо барих",
//   "Үйлчилгээний нөхцөл",
//   "Хүргэлтийн бүс",
//   "Нууцлалын бодлого",
// ];
// const FooterLogos = ["./facebook.png", "./instagram.png", "./twitter.png"];
// function Footer() {
//   const router = useRouter();
//   return (
//     <section
//       className="w-full h-fit flex flex-col divide-y divide-[#ffffff20] items-center justify-center py-[50px] px-[260px]"
//       style={{ background: `${"#12A795"}` }}
//     >
//       <header className="w-full h-[212px]  flex flex-col items-center gap-[48px] justify-between pb-[24px]">
//         <div className="flex gap-[5.5px] w-full  h-fit flex-row justify-center items-center cursor-pointer">
//           <img src="./Logo.png" alt="" className="w-[31.27px] h-[26.77px]" />
//           <p className="text-[20px] text-white font-[700]">Ecommerce</p>
//         </div>
//         <div className="flex flex-col w-full h-fit gap-[24px] items-center justify-between">
//           <div className="flex flex-row w-full justify-between h-fit ">
//             {ancherData.map((ancher, index) => (
//               <a
//                 href="./"
//                 key={index}
//                 className="font-[590] text-[16px] text-white text-center"
//               >
//                 {ancher}
//               </a>
//             ))}
//           </div>
//           <div className="w-fit gap-[18px] h-fit flex flex-row">
//             {FooterLogos.map((logo, index) => (
//               <img
//                 src={`${logo}`}
//                 alt=""
//                 key={index}
//                 className="w-[40px] cursor-pointer"
//                 onClick={() => {
//                   router.push("./");
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </header>
//       <footer className="w-full h-[70px] flex flex-col items-center text-white justify-between pt-[24px]">
//         <p>© 2024 Pinecone Ecommerse LLC </p>
//         <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
//       </footer>
//     </section>
//   );
// }
// export default Footer;
"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from '@mui/icons-material/Adb';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
// import SearchIcon from '@mui/icons-material/Search';
// import { PineIcon } from '@/assets/PineCone';
// import { PineWhite } from '@/assets/PineWhite';
import { Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { url } from "inspector";
import Link from "next/link";
import { PineWhite } from "@/assets/PineWhite";
const pages = [
  "Холбоо барих",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function FooterPart() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        background: "#12A795",
        width: "100vw",
      }}
      position="static"
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: "120px",
          flexDirection: "column",
        }}
      >
        <Toolbar
          disableGutters
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Stack
            gap={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                flexGrow: 1,
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  lineHeight: "normal",
                  fontSize: "20px",
                  color: "inherit",
                  textDecoration: "none",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <PineWhite />
                Ecommerce
              </Typography>
            </Stack>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              ></IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ color: "#ffffff" }} textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography> */}
            <Box
              gap={10}
              sx={{
                flexGrow: 1,
                textUnderlinePosition: "auto",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Холбоо барих
              </Button>
              <Link
                href="/terms&conditions"
                style={{ textDecorationColor: "white" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Үйлчилгээний нөхцөл
                </Button>
              </Link>
              <Link
                style={{ textDecorationColor: "white" }}
                href={"/delivery-area"}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Хүргэлтийн бүс
                </Button>
              </Link>
              <Link href="/privacy" style={{ textDecorationColor: "white" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Нууцлалын бодлого
                </Button>
              </Link>
            </Box>
            <Stack
              gap={2.25}
              sx={{
                flexDirection: "row",
                fontSize: "xl",
                pb: "40px",
              }}
            >
              <FacebookIcon sx={{ fontSize: 40 }} />
              <InstagramIcon sx={{ fontSize: 40 }} />
              <TwitterIcon sx={{ fontSize: 40 }} />
            </Stack>
          </Stack>
          <Box
            sx={{ border: 1, borderColor: "#FFFFFF33", width: "1200px" }}
          ></Box>
          <Stack pt="40px" alignItems="center">
            <Typography>© 2024 Pinecone Foods LLC </Typography>
            <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default FooterPart;
