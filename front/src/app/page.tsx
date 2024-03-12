import {
  AdminClothesRow,
  ProductClothesRowHeader,
} from "@/components/ProductComponents";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack>
      <ProductClothesRowHeader />
      <AdminClothesRow
        productName="Laptop"
        priority={3}
        category="bag"
        price={32000}
        arrearage={9}
        sold={99}
        addedDate="2024-03-09"
      />
    </Stack>
  );
}
