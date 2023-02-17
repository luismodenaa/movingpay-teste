import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Digite seu e-mail"),
  password: yup.string().required("Digite sua senha"),
});

export default loginSchema;
