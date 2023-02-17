import { useContext } from "react";
import { FilterDelFinancesContext } from "../../context/FilterFinances";
import CardFinance from "../CardFinance";
import HeaderListFinance from "../HeaderListFinances";
import { Container } from "./style";

const ListFinances = () => {
  const { financeFilter, setFilter, deleteFinance } = useContext(
    FilterDelFinancesContext
  );

  return (
    <Container>
      <HeaderListFinance filter={setFilter} />
      {financeFilter ? (
        <ul>
          {financeFilter.map((finance: any) => (
            <CardFinance
              finance={finance}
              key={finance.id}
              deleteFinance={deleteFinance}
            />
          ))}
        </ul>
      ) : (
        <h2>TEM NADA AI PO</h2>
      )}
    </Container>
  );
};

export default ListFinances;
