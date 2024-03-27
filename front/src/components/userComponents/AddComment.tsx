import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useProduct } from "@/providers/AddproductProvider";
import * as yup from "yup";
import { useFormik } from "formik";

type CommentType = {
  userId: string;
  productId: string;
  rating: number;
  comment: string;
};

type ProductReviewsProps = {
  productId?: string;
  comments?: CommentType[];
  rating: number | null;
};
const validationSchema = yup.object({
  comment: yup.string(),
});
export const AddComment = (props: ProductReviewsProps) => {
  const [value, setValue] = useState<number | null>(2);
  const { productId, comments, rating } = props;
  const { addReview } = useProduct();
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addReview({
        productId: "productId",
        rating: value,
        comment: values.comment,
      });
      console.log("hello");
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
            placeholder="Сэтгэгдэл бичих"
            type="text"
            sx={{
              "& fieldset": { border: "none" },
            }}
            name="comment"
            value={formik.values.comment}
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
      <Stack>
        {comments?.map((item, index) => (
          <Stack
            key={index}
            borderBottom={2}
            pb={4}
            borderColor={"#BFC6E0"}
            sx={{ borderStyle: "dashed" }}
          >
            <Stack width={1}>
              <Rating name="rating" readOnly value={item.rating} size="small" />
            </Stack>
            <Typography
              mt={4}
              mb={1}
              color={"#1D3178"}
              fontSize={18}
              fontWeight={800}
            >
              zochin
            </Typography>
            <Stack width={1}>
              <Typography color={"#9295AA"} fontSize={17.67} fontWeight={700}>
                {item.comment}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
