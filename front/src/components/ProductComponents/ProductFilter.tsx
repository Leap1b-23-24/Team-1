"use client";
import { Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { ProductFilterDropdownCard } from "./ProductFilterDropdownCard";
import { Dispatch, SetStateAction } from "react";
import { Search } from "@mui/icons-material";

const mapCate = ["women", "men", "children"];

const mapPrice = ["lowest to ", "highest to "];

type ProductFilterProps = {
  setCategory: Dispatch<SetStateAction<string>>;
  setPrice: Dispatch<SetStateAction<string>>;
  setDate: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const ProductFilter = (props: ProductFilterProps) => {
  const { setCategory, setPrice, setDate, setSearch } = props;

  return (
    <Stack direction="row" width="100%" justifyContent="space-between">
      <Stack direction="row" gap={1.5}>
        <ProductFilterDropdownCard
          svg={"/category.svg"}
          title="Ангилал"
          mapArr={mapCate}
          setState={setCategory}
        />
        <ProductFilterDropdownCard
          svg={"/attach_money.svg"}
          title="Үнэ"
          mapArr={mapPrice}
          setState={setPrice}
        />
        <ProductFilterDropdownCard
          svg={"/calendar_today.svg"}
          title="Сараар"
          setState={setDate}
        />
      </Stack>
      <Stack direction={"row"} position={"relative"} bgcolor="white">
        <Stack position={"absolute"} left={8} top={8}>
          <Search />
        </Stack>
        <TextField
          type="text"
          placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
          InputProps={{
            style: { width: "419px", height: "40px", paddingLeft: "32px" },
          }}
          onChange={(event) => {
            setSearch(event?.target.value);
          }}
        />
      </Stack>
    </Stack>
  );
};
