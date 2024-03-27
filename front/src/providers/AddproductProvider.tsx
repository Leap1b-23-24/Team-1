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
type getAllProduct = {
  quantity: number;
  filteredByDate: boolean;
  isSpecial: boolean;
  setProducts: Dispatch<SetStateAction<ProductType>>;
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
  getAllProducts: (params: getAllProduct) => Promise<void>;
<<<<<<< HEAD
  // getOrders: (params: GetOrderParams) => Promise<void>;
  searchValue: string;
  setSearchValue: (value: string) => void;
=======
  getOrders: (params: GetOrderParams) => Promise<void>;
  // singleProductData: ShoppingCardProps | null;
  // getSingleProduct: (productId: string) => void;
  // productId: string;
  // setProductId: Dispatch<SetStateAction<string>>;
>>>>>>> ec40556 (orderProduct page)
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
<<<<<<< HEAD
  const [searchValue, setSearchValue] = useState("");
=======
  // const [singleProductData, setSingleProductData] =
  //   useState<ShoppingCardProps | null>(null);
  // const [productId, setProductId] = useState<string>("");
>>>>>>> ec40556 (orderProduct page)

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

      setProducts(res.data.products);
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

  // const getSingleProduct = async (productId: string) => {
  //   try {
  //     const res = await api.post("/singleProduct", { productId });

  //     const { singleProduct } = res.data;

  //     setSingleProductData(singleProduct);
  //   } catch (error) {}
  // };

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
<<<<<<< HEAD

        // userProducts,
        // getOrders,
        searchValue,
        setSearchValue,
=======
        userProducts,
        getOrders,
        // singleProductData,
        // getSingleProduct,
        // productId,
        // setProductId,
>>>>>>> ec40556 (orderProduct page)
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
