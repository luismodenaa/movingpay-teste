import {
  BodyDiv,
  Container,
  LinkRedirect,
  SubmitButton,
} from "../InitialPage/style";
import logoMoving from "../../assets/movingpay.png";
import InputLoginRegister from "../../components/InputLoginRegister";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../schemas/registerSchema";
import Loading from "../../components/Loading";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RegisterContext, RegisterProvider } from "../../context/Register";
interface IUserRegister {
  name: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: yupResolver(registerSchema) });

  const { registerLoading, registerUser } = useContext(RegisterContext);

  return (
    <BodyDiv>
      <Container>
        <img src={logoMoving} alt="movingpay logo" />
        <h1>Cadastrar</h1>
        <form onSubmit={handleSubmit(registerUser)}>
          <InputLoginRegister>
            <input required type="text" {...register("name")} />
            <span>Nome</span>
            <p className="error-message">{errors.name?.message}</p>
          </InputLoginRegister>
          <InputLoginRegister>
            <input required type="text" {...register("email")} />
            <span>E-mail</span>
            <p className="error-message">{errors.email?.message}</p>
          </InputLoginRegister>
          <InputLoginRegister>
            <input
              required
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <span>Senha</span>
            {showPassword ? (
              <AiFillEyeInvisible
                className="eye-password"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <AiFillEye
                className="eye-password"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
            <p className="error-message">{errors.password?.message}</p>
          </InputLoginRegister>
          <SubmitButton
            type="submit"
            disabled={registerLoading ? true : false}
            loading={registerLoading ? "no-drop" : "pointer"}
          >
            {registerLoading ? (
              <Loading size={"20px"} border={"2px"} />
            ) : (
              "Cadastrar"
            )}
          </SubmitButton>
        </form>
        <p>
          Já possui uma conta?{" "}
          <LinkRedirect to={"/"}>Clique aqui!</LinkRedirect>
        </p>
      </Container>
    </BodyDiv>
  );
};

export default RegisterPage;
