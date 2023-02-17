import { Container, FormStyled } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import financeSchema from "../../schemas/financeSchema";
import { useContext } from "react";
import { CreateFinanceContext } from "../../context/CreateFinance";

interface IFormFinance {
  description: string;
  value: number;
  isReceipt: boolean;
}

const FormFinance = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFinance>({ resolver: yupResolver(financeSchema) });

  const { createFinance } = useContext(CreateFinanceContext);

  return (
    <Container>
      <FormStyled onSubmit={handleSubmit(createFinance)}>
        <div className="description">
          <label>Descrição</label>
          <input
            type="text"
            placeholder="Digite aqui a descrição"
            {...register("description")}
          />
          <p className="error-message">{errors.description?.message}</p>
        </div>
        <div className="value-type-finance">
          <div>
            <label>Valor</label>
            <input type="number" {...register("value")} />
            <p className="error-message">{errors.value?.message}</p>
          </div>
          <div>
            <label>Tipo da finança</label>
            <select {...register("isReceipt")}>
              <option value={"true"}>Receita</option>
              <option value={"false"}>Despesa</option>
            </select>
            <p className="error-message">{errors.isReceipt?.message}</p>
          </div>
        </div>
        <button type="submit">Inserir Finança</button>
      </FormStyled>
    </Container>
  );
};

export default FormFinance;
