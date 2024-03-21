"use client";
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { ProductFilterDropdownCard } from "./ProductFilterDropdownCard";
import { Dispatch, SetStateAction } from "react";
import {
  ArrowDropDown,
  Category,
  CategoryOutlined,
  DateRangeOutlined,
  MoneyOutlined,
  Search,
} from "@mui/icons-material";
import { useProduct } from "@/providers/AddproductProvider";

const mapPrice = [
  { name: "Буух", _id: "" },
  { name: "Өгсөх", _id: "" },
];

const mapDate = [
  { name: "Шинэээс хуучин", _id: "" },
  { name: "Хуучнаасаа шинэ", _id: "" },
];

type ProductFilterProps = {
  setCategory: Dispatch<SetStateAction<string>>;
  category: string;
  setPrice: Dispatch<SetStateAction<string>>;
  price: string;
  setDate: Dispatch<SetStateAction<string>>;
  date: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const ProductFilter = (props: ProductFilterProps) => {
  const { setCategory, setPrice, setDate, setSearch, category, price, date } =
    props;
  const { categories } = useProduct();

  return (
    <Stack
      direction="row"
      width="100%"
      justifyContent="space-between"
      alignItems={"flex-start"}
    >
      <Stack gap={1}>
        <Stack direction="row" gap={1.5} alignItems={"center"}>
          <ProductFilterDropdownCard
            icon={<CategoryOutlined />}
            title="Ангилал"
            mapArr={categories}
            setState={setCategory}
            state={category}
          />
          <ProductFilterDropdownCard
            icon={<MoneyOutlined />}
            title="Үнэ"
            mapArr={mapPrice}
            setState={setPrice}
            state={price}
          />
          <ProductFilterDropdownCard
            icon={<DateRangeOutlined />}
            title="Огноо"
            mapArr={mapDate}
            setState={setDate}
            state={date}
          />
        </Stack>
        <Typography color={"grey"} fontSize={12}>
          Шүүлтүүрийг арилгахын тулд давхар товшино уу !
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        position={"relative"}
        bgcolor="white"
        borderRadius={2}
      >
        <Stack position={"absolute"} left={8} top={8}>
          <Search />
        </Stack>
        <TextField
          type="text"
          variant="standard"
          placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
          InputProps={{
            style: {
              width: "419px",
              height: "42px",
              paddingLeft: "32px",
              border: "1px solid #ECEDF0",
              borderRadius: "8px",
            },
            disableUnderline: true,
          }}
          onChange={(event) => {
            setSearch(event?.target.value);
          }}
        />
      </Stack>
    </Stack>
  );
};
