import styled, { css } from "styled-components";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "label";
type TypographyColor = "default" | "muted" | "primary" | "light";

type TypographyStyleProps = {
  $variant: TypographyVariant;
  $color: TypographyColor;
};

const variantStyles = {
  h1: css`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0.08em;
  `,
  h2: css`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 3.6rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.06em;
  `,
  h3: css`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.04em;
  `,
  h4: css`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.03em;
  `,
  body: css`
    font-size: 1.6rem;
    line-height: 1.6;
  `,
  caption: css`
    font-size: 1.3rem;
    line-height: 1.5;
  `,
  label: css`
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  `,
};

const colorStyles = {
  default: css`
    color: ${({ theme }) => theme.colors.text};
  `,
  muted: css`
    color: ${({ theme }) => theme.colors.textMuted};
  `,
  primary: css`
    color: ${({ theme }) => theme.colors.primary};
  `,
  light: css`
    color: ${({ theme }) => theme.colors.light};
  `,
};

export const Text = styled.p<TypographyStyleProps>`
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $color }) => colorStyles[$color]}
`;
