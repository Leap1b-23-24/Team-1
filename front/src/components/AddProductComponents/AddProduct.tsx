import { Stack } from "@mui/material";
import { AddProductContainer } from "./AddProductContainer";
import { CustomInput } from "./CustomInput";

export const AddProduct = () => {
  return (
    <Stack
      width={"100%"}
      flexDirection={"row"}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "26px",
      }}
    >
      {/* Left Side */}
      <Stack
        width={"100%"}
        height={"100%"}
        border={1}
        gap={3}
        justifyContent={"space-between"}
      >
        <AddProductContainer flexDirection="column">
          <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
          <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
          <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
        </AddProductContainer>
        <AddProductContainer flexDirection="row">
          <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
          <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
        </AddProductContainer>
        =
      </Stack>
      {/* Right Side */}
      <Stack
        width={"100%"}
        height={"100%"}
        border={1}
        gap={3}
        justifyContent={"space-between"}
      >
        <AddProductContainer flexDirection="column">
          <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
          <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
        </AddProductContainer>
        <AddProductContainer flexDirection="column">
          <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
        </AddProductContainer>
      </Stack>
    </Stack>
  );
};
