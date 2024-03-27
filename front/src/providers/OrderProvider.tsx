import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "./UserProvider";
import { toast } from "react-toastify";
import { api } from "@/common";
import { string } from "yup";

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
  orderProducts: (params: OrderDetailType) => Promise<void>;
  getOrders: (params: GetOrderParams) => Promise<void>;
  getUserName: (id: string) => Promise<string>;
  orderId: string;
  setOrderId: Dispatch<SetStateAction<string>>;
};

type Order = {
  orderNumber: string;
  status: string;
};

export type OrderDetailType = {
  _id?: string;
  orderer?: { _id: string; userName: string; email: string };
  createdAt?: string;
  status: string;
  contactInfo: string;
  amountToBePaid: number;
  orderDetail: { id: string; quantity: number; shopId: string }[];
};

type GetOrderParams = {
  setOrders: Dispatch<SetStateAction<OrderDetailType[]>>;
};
const OrderContext = createContext<OrderContextType>({} as OrderContextType);

export const OrderProvider = ({ children }: OrderProviderType) => {
  const [order, setOrder] = useState<Order[]>([]);
  const [bucketProducts, setBucket] = useState<ProductType>([]);
  const [isBucketAdded, setBucketAdded] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");

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

  const orderProducts = async (params: OrderDetailType) => {
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

  const getOrders = async (params: GetOrderParams) => {
    const { setOrders } = params;
    try {
      const res = await api.get("/order/getAdmin", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setOrders(res.data.orders);
    } catch (error) {}
  };

  const getUserName = async (id: string) => {
    try {
      const res = await api.post("/user/getName", { _id: id });

      return res.data.userName;
    } catch (error) {
      console.log(error, "getUserName Error");
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
        getOrders,
        getUserName,
        orderId,
        setOrderId,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
