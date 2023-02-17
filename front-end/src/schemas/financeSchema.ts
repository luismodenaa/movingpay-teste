import * as yup from "yup";

const financeSchema = yup.object().shape({
  description: yup.string().required("Digite a descrição"),
  value: yup.string().required("Digite o valor"),
  isReceipt: yup.boolean().required("Selecione um valor"),
});

export default financeSchema;
