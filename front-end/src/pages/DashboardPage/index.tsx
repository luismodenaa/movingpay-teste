import { BodyDiv, ContainerLeft, ContainerRight, Header } from "./style";
import movingLogo from "../../assets/movingpay.png";
import FormFinance from "../../components/FormFinance";
import TotalValue from "../../components/TotalValue";
import ListFinances from "../../components/ListFinances";
import { FilterDelFinancesProvider } from "../../context/FilterFinances";
import { CreateFinanceProvider } from "../../context/CreateFinance";

const DashboardPage = () => {
  return (
    <>
      <Header>
        <img src={movingLogo} alt="Movingpay logo" />
        <button>Sair</button>
      </Header>
      <BodyDiv>
        <ContainerLeft>
          <CreateFinanceProvider>
            <FormFinance />
          </CreateFinanceProvider>
          <FilterDelFinancesProvider>
            <TotalValue />
          </FilterDelFinancesProvider>
        </ContainerLeft>
        <ContainerRight>
          <FilterDelFinancesProvider>
            <ListFinances />
          </FilterDelFinancesProvider>
        </ContainerRight>
      </BodyDiv>
    </>
  );
};

export default DashboardPage;
