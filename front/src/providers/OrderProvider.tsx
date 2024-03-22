import { api } from "@/common";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

type OrderProviderType = {
  children: React.ReactNode;
};

type OrderContextType = {
  order: Order[];
};

type Order = {
  orderNumber: string;
  status: string;
};

const OrderContext = createContext<OrderContextType>({} as OrderContextType);

export const OrderProvider = ({ children }: OrderProviderType) => {
  const [order, setOrder] = useState<Order[]>([]);

  useEffect(() => {
    getOrder;
  });

  const getOrder = async () => {
    try {
      const res = await api.get("/order/get", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      const { order } = res.data;

      setOrder(order);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <OrderContext.Provider value={{ order }}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
