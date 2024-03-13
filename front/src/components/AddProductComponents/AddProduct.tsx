import { Button, Stack } from "@mui/material";
import { AddProductContainer } from "./AddProductContainer";
import { CustomInput } from "./CustomInput";
import { AddPicture } from "./AddPicture";
import { AddCategory } from "./AddCategory";

export const AddProduct = () => {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      gap={2}
      padding={3}
      alignItems={"flex-end"}
    >
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
          gap={3}
          justifyContent={"space-between"}
        >
          <AddProductContainer flexDirection="column">
            <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
            <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
            <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
          </AddProductContainer>
          <AddProductContainer flexDirection="row">
            <AddPicture />
          </AddProductContainer>
          <AddProductContainer flexDirection="row">
            <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
            <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
          </AddProductContainer>
        </Stack>
        {/* Right Side */}
        <Stack
          width={"100%"}
          height={"100%"}
          gap={3}
          justifyContent={"space-between"}
        >
          <AddProductContainer flexDirection="column">
            <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
            <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
          </AddProductContainer>
          <AddProductContainer flexDirection="row">
            <AddCategory />
          </AddProductContainer>
          <AddProductContainer flexDirection="column">
            <CustomInput placeholder="Нэр" label="Бүтээгдэхүүний нэр" />
          </AddProductContainer>
        </Stack>
      </Stack>
      <Stack gap={3} flexDirection={"row"}>
        <Button
          variant="contained"
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
          sx={{
            color: "black",
            paddingX: "10px",
            fontSize: "16px",
            fontWeight: "550",
            border: "1px solid #D6D8DB",
          }}
        >
          Ноорог
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            color: "white",
            paddingX: "10px",
            fontSize: "16px",
            fontWeight: "550",
            border: "1px solid #D6D8DB",
          }}
        >
          Нийтлэх
        </Button>
      </Stack>
    </Stack>
  );
};
