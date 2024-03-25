import { api } from "@/common";
import { AddCategoryName } from "@/components/AddProductComponents/AddCategoryName";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "./UserProvider";
import { toast } from "react-toastify";
import { OrderParamsType } from "./OrderProvider";

type AddProductProviderProps = {
  children: ReactNode;
};
type getAllProduct = {
  quantity: number;
  filteredByDate: boolean;
  isSpecial: boolean;
  setProducts: Dispatch<SetStateAction<ProductType>>;
};

export type OrderDetailType = {
  _id: string;
  status: string;
  contactInfo: string;
  amountToBePaid: number;
  orderDetail: { id: string; quantity: number; shopId: string }[];
};

type GetOrderParams = {
  setOrders: Dispatch<SetStateAction<OrderDetailType[]>>;
};
export type CategoryType = {
  name: string;
  _id: string;
};
type AddProductContextType = {
  addCategory: boolean;
  setAddCategory: Dispatch<SetStateAction<boolean>>;
  categories: CategoryType[];
  subCategories: CategoryType[];
  setCategoryAdded: Dispatch<SetStateAction<boolean>>;
  getAdminProducts: (category: string) => Promise<void>;
  products: ProductType;
  getSingleCategory: (
    setState: Dispatch<SetStateAction<string>>,
    categoryId: string
  ) => Promise<void>;
  userProducts: ProductType;
  getAllProducts: (params: getAllProduct) => Promise<void>;
  getOrders: (params: GetOrderParams) => Promise<void>;
};

const AddProductContext = createContext<AddProductContextType>(
  {} as AddProductContextType
);

export const AddProductProvider = ({ children }: AddProductProviderProps) => {
  const [addCategory, setAddCategory] = useState<boolean>(false);
  const [categoryAdded, setCategoryAdded] = useState<boolean>(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [subCategories, setSubCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductType>([]);
  const [userProducts, setUserProducts] = useState<ProductType>([]);

  const getCategory = async () => {
    try {
      const res = await api.get("/category/get", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setCategories(res.data.categories);
    } catch (error) {}
  };

  const getSubCategory = async () => {
    try {
      const res = await api.get("/category/getSub", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setSubCategories(res.data.categories);
    } catch (error) {}
  };

  const getAdminProducts = async (category: string) => {
    try {
      const res = await api.get("/product/getAdmin", {
        headers: { Authorization: localStorage.getItem("token") },
        params: { category: category },
      });

      setUserProducts(res.data.products);
    } catch (error) {
      console.log(error, "user product get error");
    }
  };

  const getAllProducts = async (params: getAllProduct) => {
    const { quantity, filteredByDate, isSpecial, setProducts } = params;
    try {
      const { data } = await api.get("/product/getUser", {
        params: {
          quantity: quantity,
          date: filteredByDate ? filteredByDate : null,
          special: isSpecial ? isSpecial : null,
        },
      });

      setProducts(data.products);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const getOrders = async (params: GetOrderParams) => {
    const { setOrders } = params;
    try {
      const res = await api.get("/order/getAdmin", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setOrders(res.data.orders);
    } catch (error) {}
  };

  const getSingleCategory = async (
    setState: Dispatch<SetStateAction<string>>,
    categoryId: string
  ) => {
    try {
      const res = await api.post("/category/getSingle", {
        categoryId: categoryId,
      });

      setState(res.data.category);
    } catch (error) {}
  };
  useEffect(() => {
    getCategory();
    getSubCategory();
  }, [categoryAdded]);

  // useEffect(() => {
  //   getProduct(categoryFilder);
  // }, [categoryFilder]);

  return (
    <AddProductContext.Provider
      value={{
        addCategory,
        setAddCategory,
        categories,
        setCategoryAdded,
        subCategories,
        getAdminProducts,
        products,
        getSingleCategory,
        getAllProducts,
        userProducts,
        getOrders,
      }}
    >
      {children}
      {addCategory ? <AddCategoryName /> : null}
    </AddProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(AddProductContext);
};
