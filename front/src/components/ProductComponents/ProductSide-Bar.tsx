import { ContentPaste, Create, Sell, Settings } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Хяналтын самбар", icon: <Create />, link: "/dashboard" },
  { name: "Захилга", icon: <ContentPaste />, link: "orderPage" },
  { name: "Орлого", icon: <Sell />, link: "incomePage" },
  { name: "Бүтээгдэхүүн", icon: <Create />, link: "productPage" },
  { name: "Тохиргоо", icon: <Settings />, link: "/settingsPage" },
];

export const ProductSideBar = () => {
  const pathName = usePathname();
  return (
    <Stack width="12%" py={3} height="100vh" gap={2}>
      {menu.map((item, index) => {
        return (
          <Link href={item.link} style={{ textDecoration: "none" }}>
            <Stack
              key={index}
              direction="row"
              gap={1}
              py={1}
              paddingLeft={2}
              color="#121316"
              bgcolor={pathName == item.link ? "red" : ""}
            >
              {item.icon}
              <Typography fontSize="16px" fontWeight={600}>
                {item.name}
              </Typography>
            </Stack>
          </Link>
        );
      })}
    </Stack>
  );
};
