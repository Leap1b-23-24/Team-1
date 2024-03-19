import { Children, createContext, useContext, useState } from "react";

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
  return (
    <OrderContext.Provider value={{ order }}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
