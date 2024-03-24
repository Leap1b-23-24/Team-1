import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ProductType } from "./UserProvider";
import { toast } from "react-toastify";
import { api } from "@/common";

type OrderProviderType = {
  children: React.ReactNode;
};

export type BucketProductType = {
  shopId: string;
  _id: string;
  productName: string;
  productColor: string;
  image: string;
  price: number;
  quantity: number;
};

type OrderContextType = {
  order: Order[];
  addToBucket: (params: BucketProductType) => void;
  getBucketProducts: (
    setProduct: Dispatch<SetStateAction<BucketProductType[]>>
  ) => void;
  isBucketAdded: boolean;
  setBucketAdded: Dispatch<SetStateAction<boolean>>;
  orderProducts: (params: OrderParamsType) => Promise<void>;
};

type Order = {
  orderNumber: string;
  status: string;
};
type OrderParamsType = {
  status: string;
  contactInfo: string;
  amountToBePaid: number;
  orderDetail: { id: string; quantity: number }[];
};

const OrderContext = createContext<OrderContextType>({} as OrderContextType);

export const OrderProvider = ({ children }: OrderProviderType) => {
  const [order, setOrder] = useState<Order[]>([]);
  const [bucketProducts, setBucket] = useState<ProductType>([]);
  const [isBucketAdded, setBucketAdded] = useState<boolean>(false);

  // params: BucketProduct

  const addToBucket = (params: BucketProductType) => {
    const products = localStorage.getItem("bucket");
    if (!products) {
      const bucketProducts = JSON.stringify([params]);
      localStorage.setItem("bucket", bucketProducts);
    } else {
      let bucket = JSON.parse(products);
      bucket = [...bucket, params];
      const array = JSON.stringify(bucket);
      localStorage.setItem("bucket", array);
    }
    setBucketAdded((prev) => !prev);
    toast.success("Саванд нэмсэн");
  };
  const getBucketProducts = (
    setProduct: Dispatch<SetStateAction<BucketProductType[]>>
  ) => {
    let raw = localStorage.getItem("bucket");
    if (raw) {
      let products = JSON.parse(raw);
      setProduct(products);
    }
  };
  const orderProducts = async (params: OrderParamsType) => {
    const { status, contactInfo, amountToBePaid, orderDetail } = params;
    try {
      const res = await api.post(
        "/order/addOrder",
        {
          status,
          contactInfo,
          amountToBePaid,
          orderDetail,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );

      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        addToBucket,
        getBucketProducts,
        isBucketAdded,
        setBucketAdded,
        orderProducts,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
