import styled from "styled-components";

export const Footer = styled.footer`
  padding: 3.2rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const Text = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.03em;
`;

export const Brand = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
`;
