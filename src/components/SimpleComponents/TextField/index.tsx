import { InputHTMLAttributes } from "react";
import * as S from "./styles";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const TextField = ({ label, error, id, ...props }: TextFieldProps) => {
  const fieldId = id || props.name;

  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={fieldId}>{label}</S.Label>}
      <S.Input id={fieldId} {...props} />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  );
};

export default TextField;
