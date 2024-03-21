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
  logIn: (params: logInParams) => Promise<void>;
  logOut: () => void;
  isLogged: boolean;
  userRole: "Худалдан авагч" | "Борлуулагч";
  setUserRole: Dispatch<SetStateAction<"Худалдан авагч" | "Борлуулагч">>;
};

type signUpParams = {
  userName: string;
  email: string;
  marketName: string;
  password: string;
  role: "Худалдан авагч" | "Борлуулагч";
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
  const [userRole, setUserRole] = useState<"Худалдан авагч" | "Борлуулагч">(
    "Худалдан авагч"
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [isChecked]);

  const signUp = async (params: signUpParams) => {
    console.log("hello");

    try {
      const res = await api.post("/user/signUp", {
        userName: params.userName,
        email: params.email,
        role: params.role,
        password: params.password,
        marketName: params.role === "Борлуулагч" ? params.marketName : null,
      });
      console.log("hello2");

      const { message } = res.data;

      toast.success(message);

      router.push("/logIn");
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

      const { token, role } = res.data;

      localStorage.setItem("token", token);

      toast.success("Амжилттай нэвтэрлээ");

      role === "Борлуулагч" ? router.push("/dashboard") : router.push("/");

      setIsLogged(true);
      setChecked((prev) => !prev);
    } catch (error: any) {
      toast.warn(error.response.data.message);
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
