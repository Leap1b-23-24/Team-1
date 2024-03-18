import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";

export const CustomInput = (props: TextFieldProps) => {
  const { label, helperText, ...rest } = props;
  return (
    <Stack width={"100%"} gap={1}>
      <Typography fontSize={14} fontWeight={600} color={"#121316"}>
        {label}
      </Typography>
      <TextField
        fullWidth
        variant="standard"
        inputProps={{
          style: {
            padding: "8px 12px",
            border: "1px solid #D6D8DB",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#F7F7F8",
          },
        }}
        InputProps={{ disableUnderline: true }}
        {...rest}
      />
      <Typography fontSize={14} fontWeight={400} color={"#5E6166"}>
        {helperText}
      </Typography>
    </Stack>
  );
};
