"use client";
import { api } from "@/common";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Id, toast } from "react-toastify";

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
  logIn: (params: logInParams) => Promise<Id | undefined>;
  logOut: () => void;
  isLogged: boolean;
  userRole: string;
  setUserRole: Dispatch<SetStateAction<string>>;
};

type signUpParams = {
  userName: string;
  email: string;
  marketName: string;
  password: string;
};

type logInParams = {
  email: string;
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
  const [isLogged, setIsLogged] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [userRole, setUserRole] = useState("Худалдан авагч");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [isChecked]);

  const signUp = async (params: signUpParams) => {
    try {
      const res = await api.post("/user/signUp", {
        userName: params.userName,
        email: params.email,
        marketName: params.marketName,
        password: params.password,
      });

      const { message } = res.data;

      toast.success(message);

      router.push("/");
    } catch (error: any) {
      toast.warn(error.response.data.message);
    }
  };

  const logIn = async (params: logInParams) => {
    try {
      const res = await api.post("/user/logIn", {
        email: params.email,
        password: params.password,
      });

      const { token } = res.data;

      if (!token) return toast.warning(res.data.message);

      localStorage.setItem("token", token);

      toast.success("Амжилттай нэвтэрлээ");

      setIsLogged(true);
      setChecked((prev) => !prev);
    } catch (error) {
      console.log(error, "logIn ");
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");

    setChecked((prev) => !prev);
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
        logIn,
        logOut,
        isLogged,
        userRole,
        setUserRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
