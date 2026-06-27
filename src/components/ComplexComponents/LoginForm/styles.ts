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

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin: 0.4rem 0;
`;

export const DividerLine = styled.span`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

export const DividerText = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 100%;
  padding: 1.2rem 2rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.6rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
