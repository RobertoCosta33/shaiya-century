import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Button $variant={variant} $size={size} $fullWidth={fullWidth} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
