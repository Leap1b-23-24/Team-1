import { Stack } from "@mui/material";

type AddProductContainerProps = {
  children: React.ReactNode;
  flexDirection: "column" | "row";
};
export const AddProductContainer = (props: AddProductContainerProps) => {
  const { children, flexDirection } = props;
  return (
    <Stack
      width={"100%"}
      flexDirection={flexDirection}
      padding={3}
      gap={2}
      border={"1px solid grey"}
      borderRadius={"12px"}
      bgcolor={"white"}
    >
      {children}
    </Stack>
  );
};
