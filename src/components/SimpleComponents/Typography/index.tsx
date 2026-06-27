import { HTMLAttributes } from "react";
import * as S from "./styles";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "label";
type TypographyColor = "default" | "muted" | "primary" | "light";

type TypographyProps = HTMLAttributes<HTMLParagraphElement> & {
  variant?: TypographyVariant;
  color?: TypographyColor;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
};

const Typography = ({
  variant = "body",
  color = "default",
  as = "p",
  children,
  ...props
}: TypographyProps) => {
  return (
    <S.Text as={as} $variant={variant} $color={color} {...props}>
      {children}
    </S.Text>
  );
};

export default Typography;
