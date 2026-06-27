import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonStyleProps = {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
};

const sizeStyles = {
  sm: css`
    padding: 0.8rem 1.6rem;
    font-size: 1.3rem;
  `,
  md: css`
    padding: 1.2rem 2.4rem;
    font-size: 1.4rem;
  `,
  lg: css`
    padding: 1.6rem 3.2rem;
    font-size: 1.6rem;
  `,
};

const variantStyles = {
  primary: css`
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.primaryDark} 100%
    );
    color: ${({ theme }) => theme.colors.textDark};
    border: 1px solid ${({ theme }) => theme.colors.primaryLight};

    &:hover:not(:disabled) {
      box-shadow: ${({ theme }) => theme.shadows.gold};
      transform: translateY(-0.1rem);
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.secondaryLight};
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background: rgba(201, 162, 39, 0.1);
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textMuted};
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.text};
    }
  `,
};

export const Button = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  letter-spacing: 0.05em;
  border-radius: 0.4rem;
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;
