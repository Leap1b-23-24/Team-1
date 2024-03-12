import {
  AddProductButton,
  AdminClothesRow,
  ProductClothesRowHeader,
  ProductSideBar,
} from "@/components/ProductComponents";
import { Stack, Typography } from "@mui/material";

export default function productPage() {
  return (
    <Stack direction="row" width="100%">
      <ProductSideBar />
      <Stack width="100%" bgcolor="#ECEDF0">
        <Stack direction="row" padding={3} gap={4}>
          <Typography fontSize="14px" fontWeight={600}>
            Бүтээгдэхүүн
          </Typography>
          <Typography fontSize="14px" fontWeight={600}>
            Ангилал
          </Typography>
        </Stack>
        <Stack padding={3} gap={3}>
          <AddProductButton />
          <Stack borderRadius="12px" bgcolor="white">
            <ProductClothesRowHeader />
            <AdminClothesRow
              priority={23}
              productName="bag"
              category="bag"
              price={345000}
              arrearage={89}
              sold={809}
              addedDate="2024-03-12"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
