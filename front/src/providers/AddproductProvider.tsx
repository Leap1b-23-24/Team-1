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

type AddProductProviderProps = {
  children: ReactNode;
};

type Product = {
  productName: string;
  images: string;
  productPrice: number;
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
  getProduct: (category: string) => Promise<void>;
  products: ProductType;
  getSingleCategory: (
    setState: Dispatch<SetStateAction<string>>,
    categoryId: string
  ) => Promise<void>;
  setAllProducts: (value: Product[]) => void;
  allProducts: Product[];
  getAllProducts: () => Promise<void>;
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
  const [allProducts, setAllProducts] = useState<Product[]>([]);

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

  const getProduct = async (category: string) => {
    try {
      const res = await api.get("/product/getAdmin", {
        headers: { Authorization: localStorage.getItem("token") },
        params: {
          category: category,
        },
      });

      const { products } = res.data;

      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllProducts = async () => {
    try {
      const { data } = await api.get("product/getAllProducts");
      setAllProducts(data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
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
        getProduct,
        products,
        getSingleCategory,
        setAllProducts,
        allProducts,
        getAllProducts,
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
