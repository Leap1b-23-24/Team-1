"use client";

import { api } from "@/common";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";

type AuthProviderType = {
  children: React.ReactNode;
};

type AuthContextType = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
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
  signUp: (params: signUpParams) => Promise<void>;
};

type signUpParams = {
  userName: string;
  email: string;
  marketName: string;
  password: string;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderType) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [marketName, setMarketName] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [khoroo, setKhoroo] = useState("");
  const [experience, setExperience] = useState("");
  const [productType, setProductType] = useState("");

  const signUp = async (params: signUpParams) => {
    try {
      const res = await api.post("/user/signUp", {
        userName: params.userName,
        email: params.email,
        marketName: params.marketName,
        password: params.password,
      });
      if (res.data.message === "User created successfully") {
        toast.success(res.data.message);
        router.push("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
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
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
