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
import { string } from "yup";

type AddProductProviderProps = {
  children: ReactNode;
};
type getAllProduct = {
  quantity: number;
  filteredByDate: boolean;
  isSpecial: boolean;
  setProducts: Dispatch<SetStateAction<ProductType>>;
};

type Comment = {
  productId: string;
  comment: string;
}[];

type ReviewParams = {
  productId: string;
  comment: string;
  rating: number | null;
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
  // getOrders: (params: GetOrderParams) => Promise<void>;
  searchValue: string;
  setSearchValue: (value: string) => void;
  addReview: (params: ReviewParams) => Promise<void>;
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
  const [comments, setComments] = useState<Comment>([]);

  const [userProducts, setUserProducts] = useState<ProductType>([]);
  const [searchValue, setSearchValue] = useState("");

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

  // const addReview = async (
  //   productId: string,
  //   rating: number,
  //   comment: string
  // ) => {
  //   try {
  //     // const { data } = await api.post(
  //     //   "product/addReview"
  //     //   // { productId, star },
  //     //   // { headers: { Authorization: localStorage.getItem("token") } }
  //     // );
  //     // const reviewID = data.reviewID;
  //     const res = await api.post(
  //       "comment/addComment",
  //       {
  //         productId: productId,
  //         comment: comment,
  //         rating: rating,
  //       },
  //       { headers: { Authorization: localStorage.getItem("token") } }
  //     );
  //     const { comment } = res.data;
  //     setComments(comment);
  //     // setRefresh((prev) => prev + 1);
  //     toast.success(res.data.message, {
  //       position: "top-center",
  //       hideProgressBar: true,
  //     });
  //   } catch (error) {
  //     console.log(error), "FFF";
  //   }
  // };

  const addReview = async (params: ReviewParams) => {
    try {
      const res = await api.post(
        "comment/addComment",
        {
          productId: params.productId,
          rating: params.rating,
          comment: params.comment,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
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
        addReview,
        addCategory,
        setAddCategory,
        categories,
        setCategoryAdded,
        subCategories,
        getAdminProducts,
        products,
        getSingleCategory,
        getAllProducts,

        // userProducts,
        // getOrders,
        searchValue,
        setSearchValue,
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
