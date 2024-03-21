import {
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
const footerQueries = [
  "Бидний тухай",
  "Холбоо барих",
  "Түгээмэл асуулт хариулт",
];
const Category = [
  "Хувцас",
  "Камер, хэрэгсэл",
  "Ухаалаг утас, таблет",
  "Чихэвч",
  "Гэр ахуйн бараа",
];

const socialImg = ["/Group 202.png", "/Group 203.png", "/twitter.png"];

export const Footer = () => {
  return (
    <Stack width={1}>
      <Stack width={1} bgcolor={"#EEEFFB"}>
        <Container
          maxWidth="lg"
          className="flex flex-col  py-[50px] max-w-[1200px] w-fit m-auto  justify-center items-center gap-12 color-[#FFFFFF]"
        >
          <Stack
            py={"94px"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"start"}
          >
            <Stack width={0.5} gap={"25px"}>
              <Typography color={"common.black"} fontSize={38} fontWeight={800}>
                eCommerce
              </Typography>
              <Stack flexDirection={"row"}>
                <TextField
                  placeholder="Имэйл хаяг"
                  inputProps={{
                    style: {
                      padding: "14px 18px",
                      paddingRight: "140px",
                    },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: "#FFF",
                      position: "relative",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Stack
                          position={"absolute"}
                          right={0}
                          bgcolor={"#FB2E86"}
                          borderRadius={"4px"}
                          p={1.5}
                        >
                          <Typography color={"#EEEFFB"}>Бүртгүүлэх</Typography>
                        </Stack>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Stack
                gap={1.25}
                color={"#8A8FB9"}
                fontSize={16}
                fontWeight={400}
              >
                <Typography>Хаяг</Typography>
                <Typography maxWidth={"484px"}>
                  Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
                  Гурван гол - 401 тоот
                </Typography>
              </Stack>
            </Stack>

            <Stack flexDirection={"row"} width={0.5}>
              <Stack width={0.5} gap={"37px"}>
                <Typography
                  color={"common.black"}
                  fontSize={22}
                  fontWeight={800}
                >
                  Ангилал
                </Typography>
                <Stack gap={"21px"}>
                  {Category.map((item, index) => (
                    <Typography
                      key={index}
                      color={"#8A8FB9"}
                      fontSize={16}
                      fontWeight={400}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
              <Stack width={0.5} gap={"37px"}>
                <Typography
                  color={"common.black"}
                  fontSize={22}
                  fontWeight={800}
                >
                  Бусад
                </Typography>
                <Stack gap={"21px"}>
                  {footerQueries.map((item, index) => (
                    <Typography
                      key={index}
                      color={"#8A8FB9"}
                      fontSize={16}
                      fontWeight={400}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Stack py={"17px"} width={1} bgcolor={"#E7E4FB"}>
        <Container maxWidth="lg">
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            pr={30}
            pl={5}
          >
            <Typography color={"#9DA0AE"}>©ecommerce </Typography>
            <Stack flexDirection={"row"} gap={"10.87px"}>
              {socialImg.map((item, index) => (
                <Stack
                  key={index}
                  width={"19.42px"}
                  height={"19.42px"}
                  borderRadius={"50%"}
                  bgcolor={"#151875"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image src={item} alt="social image" height={22} width={22} />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};
