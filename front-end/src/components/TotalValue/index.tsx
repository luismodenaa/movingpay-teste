import { useContext } from "react";
import { IFinance } from "../../context/Auth";
import { FilterDelFinancesContext } from "../../context/FilterFinances";
import { Container } from "./style";

const TotalValue = () => {
  const { financeFilter } = useContext(FilterDelFinancesContext);

  const totalValue = financeFilter.reduce(
    (total: number, finance: IFinance) => {
      if (finance.is_receipt) {
        return total + Number(finance.value);
      } else {
        return total - Number(finance.value);
      }
    },
    0
  );

  return (
    <Container>
      <div>
        <p>Valor total:</p>
        <span>R$ {totalValue.toFixed(2)}</span>
      </div>
      <p>O valor se refere ao saldo disponível</p>
    </Container>
  );
};

export default TotalValue;
