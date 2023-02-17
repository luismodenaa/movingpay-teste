import { InputBox } from "./style";

type IProps = {
  children: React.ReactNode[];
};

const InputLoginRegister = ({ children }: IProps) => {
  return <InputBox>{children}</InputBox>;
};

export default InputLoginRegister;
