import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.1em;
  text-align: center;
  text-shadow: 0 0 2rem rgba(201, 162, 39, 0.4);
  margin-bottom: 0.4rem;
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  margin-bottom: 0.8rem;
`;

export const ForgotLink = styled.div`
  text-align: right;
  margin-top: -1.2rem;

  a {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: color 0.15s;

    &:hover { color: ${({ theme }) => theme.colors.primary}; }
  }
`;

export const LinkText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  margin-top: 0.4rem;
`;

export const ErrorMessage = styled.div`
  padding: 1.2rem 1.6rem;
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.error};
  font-size: 1.3rem;
  text-align: center;
`;
