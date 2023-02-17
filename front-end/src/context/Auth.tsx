import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { AxiosError } from "axios";

interface IProvider {
  user: User;
  loadingUser: boolean;
  loginUser: (data: IUserLogin) => void;
  loginLoading: boolean;
  finances: IFinance[];
  setFinances: Dispatch<SetStateAction<never[]>>;
}

interface iAuthProps {
  children: ReactNode;
}

interface IUserLogin {
  email: string;
  password: string;
}

interface IDefaultErrorResponse {
  error: string;
}

export interface IFinance {
  created_at: string;
  updated_at: string;
  description: string;
  id: number;
  value: number;
  user_id: number;
  is_receipt: boolean;
}

interface IUser {
  created_at: string;
  email: string;
  id: number;
  password: string;
  updated_at: string;
  finances: IFinance[];
}

type User = IUser | null;

export const AuthContext = createContext<IProvider>({} as IProvider);

export const AuthProvider = ({ children }: iAuthProps) => {
  const [user, setUser] = useState<User>(null);
  const [finances, setFinances] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@moving:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/users");
          setUser(data);
          setFinances(data.finances);
        } catch (error) {
          console.error(error);
        }
      }
      setLoadingUser(false);
    };
    loadUser();
  }, []);

  const loginUser = async (formData: IUserLogin) => {
    const toastLoading = toast.loading("Carregando...");
    setLoginLoading(true);

    try {
      const response = await api.post("/login", formData);

      toast.update(toastLoading, {
        render: "Login realizado com sucesso",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      api.defaults.headers.authorization = `Bearer ${response.data.token}`;

      const { data } = await api.get("/users");

      setUser(data);
      localStorage.setItem("@moving:token", response.data.token);
      setLoginLoading(false);
      const toNavigate = location.state?.from?.pathname || "dashboard";
      navigate(toNavigate, { replace: true });
    } catch (error) {
      console.error(error);

      const currentError = error as AxiosError<IDefaultErrorResponse>;
      setLoginLoading(false);
      toast.update(toastLoading, {
        render: currentError.response?.data,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingUser,
        loginUser,
        loginLoading,
        finances,
        setFinances,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
