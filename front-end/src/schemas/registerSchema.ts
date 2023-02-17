import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Digite seu nome"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Digite seu e-mail"),
  password: yup.string().required("Digite sua senha"),
});

export default registerSchema;
