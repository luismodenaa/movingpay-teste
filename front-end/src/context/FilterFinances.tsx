import moment from "moment";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { AuthContext, IFinance } from "./Auth";

interface IFilterProps {
  children: ReactNode;
}

interface IProvider {
  financeFilter: any;
  setFilter: Dispatch<SetStateAction<string>>;
  deleteFinance: (finance: IFinance) => void;
}

export const FilterDelFinancesContext = createContext<IProvider>(
  {} as IProvider
);

export const FilterDelFinancesProvider = ({ children }: IFilterProps) => {
  const { finances, setFinances } = useContext(AuthContext);
  const [filter, setFilter] = useState("");

  const financeFilter = finances.filter((finance) =>
    filter == ""
      ? true
      : moment(finance.created_at).format("DD/MM/YYYY") ===
        moment(filter).format("DD/MM/YYYY")
  );

  const deleteFinance = async (selectedFinance: IFinance) => {
    const toastLoading = toast.loading("Carregando...");
    try {
      const response = await api.delete(`/finances/${selectedFinance.id}`);

      const newFinanceList = finances.filter(
        (finance) => finance !== selectedFinance
      );
      setFinances(newFinanceList);

      toast.update(toastLoading, {
        render: "Finança deletada com sucesso",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
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
    <FilterDelFinancesContext.Provider
      value={{ setFilter, financeFilter, deleteFinance }}
    >
      {children}
    </FilterDelFinancesContext.Provider>
  );
};
