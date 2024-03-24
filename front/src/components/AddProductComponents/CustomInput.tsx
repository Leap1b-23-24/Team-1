import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";

export const CustomInput = (props: TextFieldProps) => {
  const { label, helperText, error, ...rest } = props;

  return (
    <Stack width={"100%"} gap={1}>
      <Typography fontSize={14} fontWeight={600} color={"#121316"}>
        {label}
      </Typography>
      <TextField
        fullWidth
        inputProps={{
          style: {
            padding: "8px 12px",
            overflow: "hidden",
            backgroundColor: "#F7F7F8",
          },
        }}
        {...rest}
      />
      <Typography
        fontSize={14}
        fontWeight={400}
        color={error ? "#E04A2A" : "#5E6166"}
      >
        {helperText}
      </Typography>
    </Stack>
  );
};
