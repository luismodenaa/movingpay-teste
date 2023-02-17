import { BodyDiv, Container, LinkRedirect, SubmitButton } from "./style";
import logoMoving from "../../assets/movingpay.png";
import InputLoginRegister from "../../components/InputLoginRegister";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import loginSchema from "../../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/Auth";
import Loading from "../../components/Loading";

interface IUserLogin {
  email: string;
  password: string;
}

const InitialPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(loginSchema) });

  const { user, loginUser, loginLoading } = useContext(AuthContext);

  console.log(user);

  return (
    <>
      <BodyDiv>
        <Container>
          <img src={logoMoving} alt="movingpay logo" />
          <h1>Entrar</h1>
          <form onSubmit={handleSubmit(loginUser)}>
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
              disabled={loginLoading ? true : false}
              loading={loginLoading ? "no-drop" : "pointer"}
            >
              {loginLoading ? (
                <Loading size={"20px"} border={"2px"} />
              ) : (
                "Entrar"
              )}
            </SubmitButton>
          </form>
          <p>
            Não possui uma conta?{" "}
            <LinkRedirect to={"/register"}>Clique aqui!</LinkRedirect>
          </p>
        </Container>
      </BodyDiv>
    </>
  );
};

export default InitialPage;
