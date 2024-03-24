"use client";
import { api } from "@/common";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type UserProviderType = {
  children: ReactNode;
};
export type ProductType = {
  _id: string;
  shopId: string;
  productName: string;
  color: string;
  productPrice: number;
  productCode: string;
  categoryId: string;
  quantity: number;
  thumbNails: string;
  images: string[];
  salePercent: number;
  description: string;
  viewsCount: string;
  soldQuantity?: number;
  createdAt: Date;
}[];
type UserContextType = {
  getUserProducts: () => Promise<void>;
  userProduct: ProductType;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const Userprovider = ({ children }: UserProviderType) => {
  const [userProduct, setUserProducts] = useState<ProductType>([]);

  const getUserProducts = async () => {
    try {
      const res = await api.get("/product/getUser");

      setUserProducts(res.data.products);
    } catch (error) {
      console.log(error, "user product get error");
    }
  };

  return (
    <UserContext.Provider value={{ getUserProducts, userProduct }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  return useContext(UserContext);
};
