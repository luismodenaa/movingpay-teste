import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { AxiosError } from "axios";

interface IProvider {
  registerUser: (data: IUserRegister) => void;
  registerLoading: boolean;
}

interface IUserRegister {
  name: string;
  email: string;
  password: string;
}

interface IRegisterProps {
  children: ReactNode;
}

interface IDefaultErrorResponse {
  error: string;
}

export const RegisterContext = createContext<IProvider>({} as IProvider);

export const RegisterProvider = ({ children }: IRegisterProps) => {
  const [registerLoading, setRegisterLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = async (data: IUserRegister) => {
    const toastLoading = toast.loading("Carregando...");
    setRegisterLoading(true);
    try {
      const response = await api.post("/users", data);
      toast.update(toastLoading, {
        render: "Cadastro realizado com sucesso",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      setRegisterLoading(false);
      navigate("/");
    } catch (error) {
      const currentError = error as AxiosError<IDefaultErrorResponse>;
      setRegisterLoading(false);
      console.error(error);
      toast.update(toastLoading, {
        render: currentError.response?.data.errors[0].message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <RegisterContext.Provider value={{ registerUser, registerLoading }}>
      {children}
    </RegisterContext.Provider>
  );
};
