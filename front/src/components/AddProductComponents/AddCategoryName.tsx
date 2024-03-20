"use client";
import { useProduct } from "@/providers/AddproductProvider";
import { Close } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { CustomInput } from "./CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "@/common";
import { toast } from "react-toastify";
import { useState } from "react";
import { Toggle } from "./Toggle";

export const AddCategoryName = () => {
  const [generalOrSub, setGenaral] = useState(true);
  const { setAddCategory, setCategoryAdded } = useProduct();
  const validationSchema = yup.object({
    name: yup.string().required("Энэ талбар хоосон байж болохгүй!"),
  });
  const formik = useFormik({
    initialValues: { name: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await api.post("/category/add", {
          name: values.name,
          type: generalOrSub ? "general" : "sub",
        });

        toast.success(res.data.message);

        setAddCategory(false);
        // setCategoryAdded((prev) => !prev);
      } catch (error: any) {
        toast.warn(error.response.data.message);
      }
    },
  });
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"fixed"}
      top={0}
      left={0}
      zIndex={10}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        top={0}
        left={0}
        bgcolor={"#00000080"}
        onClick={() => {
          setAddCategory(false);
        }}
      ></Stack>
      <Stack
        width={450}
        bgcolor={"white"}
        borderRadius={2}
        border={"1px solid grey"}
        padding={2}
        position={"absolute"}
        zIndex={10}
        gap={2}
      >
        <Stack
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Stack color={"white"}>
            <Close />
          </Stack>
          <Typography fontSize={24} fontWeight={560}>
            Ангилал нэмэх
          </Typography>
          <IconButton
            disableFocusRipple
            disableRipple
            onClick={() => {
              setAddCategory(false);
            }}
          >
            <Close />
          </IconButton>
        </Stack>
        <CustomInput
          type="text"
          placeholder="цамц"
          label="Ангиллын нэр"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.name) && formik.touched.name}
          helperText={formik.errors.name}
        />
        <Toggle setState={setGenaral} state={generalOrSub} />
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          нэмэх
        </Button>
      </Stack>
    </Stack>
  );
};
