import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "@/common";
import { toast } from "react-toastify";

type AddCommentProps = {
  productId: string | string[];
  isCommentAdded: boolean;
  setIsCommentAdded: React.Dispatch<React.SetStateAction<boolean>>;
};
const validationSchema = yup.object({
  comment: yup.string(),
});

export const AddComment = (props: AddCommentProps) => {
  const { productId, setIsCommentAdded } = props;
  const [value, setValue] = useState<number | null>(2);

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await api.post(
          "product/addComment",
          {
            comment: values.comment,
            rating: value,
            productId: productId,
          },
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        );

        setIsCommentAdded((prev) => !prev);

        toast.success(res.data.message);
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
  });

  return (
    <Stack width={"100%"} gap={3}>
      <Typography color={"#1D3178"} fontSize={"18px"} fontWeight={800}>
        {"Үнэлгээ нэмэх"}
      </Typography>
      <Stack
        width={"100%"}
        bgcolor={"white"}
        borderRadius={"8px"}
        px={3}
        py={6}
        gap={5}
      >
        <Stack width={"100%"} borderBottom={"solid 2px #BFC6E0"} padding={2}>
          {/* <Box
          // sx={{
          //   "& > legend": { mt: 2 },
          // }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box> */}
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Stack>
        <Stack width={"100%"} borderBottom={"solid 2px #BFC6E0"}>
          <TextField
            name="comment"
            value={formik.values.comment}
            placeholder="Сэтгэгдэл бичих"
            type="text"
            sx={{
              "& fieldset": { border: "none" },
            }}
            onChange={formik.handleChange}
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          {" "}
          <Button
            variant="contained"
            sx={{
              background: "#FB2E86",
              width: "fit-content",
            }}
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            {"Үнэлэх"}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
