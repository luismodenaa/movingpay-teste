import { Container } from "./style";

const HeaderListFinance = ({ filter }: any) => {
  return (
    <Container>
      <p>Resumo financeiro</p>
      <div>
        <button onClick={() => filter("")}>Todos</button>
        <input type="date" onChange={(event) => filter(event.target.value)} />
      </div>
    </Container>
  );
};

export default HeaderListFinance;
