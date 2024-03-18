import { ContentPaste, Create, Sell, Settings } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Хяналтын самбар", icon: <Create />, link: "/dashboard" },
  { name: "Захилга", icon: <ContentPaste />, link: "/dashboard/orderPage" },
  { name: "Орлого", icon: <Sell />, link: "/dashboard/incomePage" },
  { name: "Бүтээгдэхүүн", icon: <Create />, link: "/dashboard/productPage" },
  { name: "Тохиргоо", icon: <Settings />, link: "/dashboard/settingsPage" },
];

export const ProductSideBar = () => {
  const pathName = usePathname();

  return (
    <Stack padding={"24px 20px"} height="100%" gap={2}>
      {menu.map((item, index) => {
        return (
          <Link href={item.link} key={index} style={{ textDecoration: "none" }}>
            <Stack
              direction="row"
              gap={1}
              py={1}
              paddingLeft={2}
              bgcolor={pathName == item.link ? "#ECEDF0" : ""}
              color="#121316"
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
