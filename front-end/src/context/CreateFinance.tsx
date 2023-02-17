import { createContext, ReactNode, useContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { AuthContext } from "./Auth";

interface ICreateProps {
  children: ReactNode;
}

interface IProvider {
  createFinance: (data: IFormFinance) => void;
}

export const CreateFinanceContext = createContext<IProvider>({} as IProvider);

interface IFormFinance {
  description: string;
  value: number;
  isReceipt: boolean;
}

export const CreateFinanceProvider = ({ children }: ICreateProps) => {
  const { setFinances, finances } = useContext(AuthContext);

  const createFinance = async (data: IFormFinance) => {
    const toastLoading = toast.loading("Carregando...");
    try {
      const response = await api.post("/finances", data);
      toast.update(toastLoading, {
        render: "Finança adicionada com sucesso",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      setFinances([...finances, response.data]);

      console.log(response.data);
    } catch (error) {
      toast.update(toastLoading, {
        render: "Ops... algo deu errado",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
      console.error(error);
    }
  };

  return (
    <CreateFinanceContext.Provider value={{ createFinance }}>
      {children}
    </CreateFinanceContext.Provider>
  );
};
