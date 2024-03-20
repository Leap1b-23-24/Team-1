"use client";
import { Button, Stack } from "@mui/material";
import { AddProductContainer } from "./AddProductContainer";
import { CustomInput } from "./CustomInput";
import { AddPicture } from "./AddPicture";
import { AddCategory } from "./AddCategory";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { CustomSelect } from "./CustomSelect";
import { api } from "@/common";
import { toast } from "react-toastify";
import { useProduct } from "@/providers/AddproductProvider";

export const AddProductComp = () => {
  const [imageLinks, setImageLink] = useState<string[]>([]);
  const [mainCategory, setMainCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const { categories, subCategories } = useProduct();
  const errorText = "Энэ талбар хоосон байж болохгүй!";
  const validationSchema = yup.object({
    name: yup.string().required(errorText),
    price: yup.number().required(errorText),
    productCode: yup.string().required(errorText),
    description: yup.string().required(errorText),
    tag: yup.string().required(errorText),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      productCode: "",
      description: "",
      inStock: 0,
      tag: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (mainCategory === "" && subCategory === "") {
        toast.warn("Ангилал сонгоно уу");
        return;
      }
      try {
        const res = await api.post("/product/add", {
          productName: values.name,
          shopId: "empty",
          productPrice: values.price,
          categoryId: mainCategory,
          quantity: values.inStock,
          images: imageLinks,
          description: values.description,
        });

        toast.success(res.data.message);

        formik.resetForm();
        setImageLink([]);
        setMainCategory("");
        setSubCategory("");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Stack
      width={"100%"}
      height={"100%"}
      gap={2}
      padding={3}
      alignItems={"flex-end"}
      bgcolor={"#F7F7F8"}
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
            <CustomInput
              placeholder="Нэр"
              type="text"
              label="Бүтээгдэхүүний нэр"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              helperText={formik.touched.name && formik.errors.name}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.name) && formik.touched.name}
            />
            <CustomInput
              placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
              type="text"
              label="Нэмэлт мэдээлэл"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              helperText={
                formik.touched.description && formik.errors.description
              }
              onBlur={formik.handleBlur}
              error={
                Boolean(formik.errors.description) && formik.touched.description
              }
            />
            <CustomInput
              placeholder="#12345678"
              type="text"
              label="Барааны код"
              name="productCode"
              value={formik.values.productCode}
              onChange={formik.handleChange}
              helperText={
                formik.touched.productCode && formik.errors.productCode
              }
              onBlur={formik.handleBlur}
              error={
                Boolean(formik.errors.productCode) && formik.touched.productCode
              }
            />
          </AddProductContainer>
          <AddProductContainer flexDirection="row">
            <AddPicture setLink={setImageLink} links={imageLinks} />
          </AddProductContainer>
          <AddProductContainer flexDirection="row">
            <CustomInput
              placeholder="Үндсэн үнэ"
              type="number"
              label="Үндсэн үнэ"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              helperText={formik.touched.price && formik.errors.price}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.price) && formik.touched.price}
            />
            <CustomInput
              placeholder="Үлдэгдэл тоо ширхэг"
              type="number"
              label="Үлдэгдэл тоо ширхэг"
              name="inStock"
              value={formik.values.inStock}
              onChange={formik.handleChange}
              helperText={formik.touched.inStock && formik.errors.inStock}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.inStock) && formik.touched.inStock}
            />
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
            <CustomSelect
              setValue={setMainCategory}
              value={mainCategory}
              options={categories}
              label="Ерөнхий ангилал"
              placeholder="Сонгох"
            />
            <CustomSelect
              setValue={setSubCategory}
              value={subCategory}
              options={subCategories}
              label="Дэд ангилал"
              placeholder="Сонгох"
            />
          </AddProductContainer>
          <AddProductContainer flexDirection="row">
            <AddCategory />
          </AddProductContainer>
          <AddProductContainer flexDirection="column">
            <CustomInput
              placeholder="Таг нэмэх..."
              type="text"
              label="Таг"
              helperText={
                Boolean(formik.errors.tag) && formik.touched.tag
                  ? formik.touched.tag && formik.errors.tag
                  : "Санал болгох: Гутал , Цүнх , Эмэгтэй "
              }
              name="tag"
              value={formik.values.tag}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.tag) && formik.touched.tag}
            />
          </AddProductContainer>
        </Stack>
      </Stack>
      <Stack gap={3} flexDirection={"row"}>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          sx={{
            flexDirection: "row",
            color: "primary",
            paddingX: "13px",
            fontSize: "16px",
            fontWeight: "550",
            border: "1px solid #D6D8DB",
          }}
        >
          Ноорог
        </Button>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => {
            formik.handleSubmit();
          }}
          sx={{
            paddingX: "10px",
            fontSize: "16px",
            fontWeight: "550",
          }}
        >
          Нийтлэх
        </Button>
      </Stack>
    </Stack>
  );
};
