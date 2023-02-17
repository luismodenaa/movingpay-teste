import { Card, DelFinance, DivLeft, DivRight } from "./style";
import { IFinance } from "../../context/Auth";
import moment from "moment";

interface ICardProps {
  finance: IFinance;
  deleteFinance: (data: IFinance) => void;
}

const CardFinance = ({ finance, deleteFinance }: ICardProps) => {
  return (
    <Card borderColor={finance.is_receipt ? "#03b898" : "#e65454"}>
      <DivLeft>
        <h3>{finance.description}</h3>
        <p>{finance.is_receipt ? "Receita" : "Despesa"}</p>
        <p>{moment(finance.created_at).format("DD/MM/YYYY")}</p>
      </DivLeft>
      <DivRight>
        <p>R$ {Number(finance.value).toFixed(2)}</p>
        <DelFinance onClick={() => deleteFinance(finance)} />
      </DivRight>
    </Card>
  );
};

export default CardFinance;
