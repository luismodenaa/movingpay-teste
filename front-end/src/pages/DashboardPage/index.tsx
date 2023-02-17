import { BodyDiv, Container, Header } from "./style";
import movingLogo from "../../assets/movingpay.png";
import FormFinance from "../../components/FormFinance";

const DashboardPage = () => {
  return (
    <>
      <Header>
        <img src={movingLogo} alt="Movingpay logo" />
        <button>Sair</button>
      </Header>
      <BodyDiv>
        <FormFinance />
      </BodyDiv>
    </>
  );
};

export default DashboardPage;
