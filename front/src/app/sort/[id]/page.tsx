"use client";
import { AddComment, AllComment } from "@/components/userComponents";
import { Container, Stack, Typography } from "@mui/material";
import { useParams } from "next/navigation";

export default function SingleProduct() {
  const { id } = useParams();
  if (!id) return;

  return (
    <Stack width={"100%"} bgcolor={"red"}>
      <Container maxWidth="lg"></Container>
      <Stack width={"100%"} bgcolor={"#F9F8FE"}>
        <Container maxWidth={"lg"}>
          <Stack py={"100px"} gap={6}>
            <Stack direction={"row"} gap={3}>
              <Typography color={"#151875"} fontWeight={800} fontSize={"24px"}>
                {"Нэмэлт мэдээлэл"}
              </Typography>
              <Typography color={"#151875"} fontWeight={800} fontSize={"24px"}>
                {"Үнэлгээ"}
              </Typography>
            </Stack>
            <AddComment />
            <AllComment />
          </Stack>
        </Container>
      </Stack>
      <Stack width={"100%"} py={"130px"}>
        <Container maxWidth="lg">
          <Stack width={"100%"} gap={6}>
            <Typography color={"#101750"} fontSize={"36px"} fontWeight={800}>
              {"Холбоотой бүтээгдэхүүн"}
            </Typography>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
