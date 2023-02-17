import { Container } from "./style";

const FormFinance = () => {
  return (
    <Container>
      <form>
        <label>Descrição</label>
        <input type="text" placeholder="Digite aqui a descrição" />
      </form>
    </Container>
  );
};

export default FormFinance;
