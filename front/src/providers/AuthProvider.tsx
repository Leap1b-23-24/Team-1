"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AuthProviderType = {
  children: React.ReactNode;
};

type AuthContextType = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  marketName: string;
  setMarketName: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  district: string;
  setDistrict: Dispatch<SetStateAction<string>>;
  khoroo: string;
  setKhoroo: Dispatch<SetStateAction<string>>;
  experience: string;
  setExperience: Dispatch<SetStateAction<string>>;
  productType: string;
  setProductType: Dispatch<SetStateAction<string>>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [marketName, setMarketName] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [khoroo, setKhoroo] = useState("");
  const [experience, setExperience] = useState("");
  const [productType, setProductType] = useState("");
  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        userName,
        setUserName,
        marketName,
        setMarketName,
        city,
        setCity,
        district,
        setDistrict,
        experience,
        setExperience,
        khoroo,
        setKhoroo,
        productType,
        setProductType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
