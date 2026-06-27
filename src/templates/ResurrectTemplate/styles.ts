import styled, { keyframes } from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  padding: 10rem 3.2rem 6rem;
  background:
    radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.05) 0%, transparent 55%),
    ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

export const PageLabel = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 1rem;
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1.2rem;

  span { color: ${({ theme }) => theme.colors.primary}; }
`;

export const PageSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  margin-bottom: 4rem;
`;

export const Card = styled.div`
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.2rem;
  padding: 4rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, ${({ theme }) => theme.colors.primary}, transparent);
    border-radius: 1.2rem 1.2rem 0 0;
  }
`;

export const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.06em;
  margin-bottom: 2.4rem;
`;

export const AccountInfo = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 2rem;

  strong { color: ${({ theme }) => theme.colors.primary}; }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.6rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus { border-color: ${({ theme }) => theme.colors.primary}; }
  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }
`;

export const CharList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const CharOption = styled.div<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem 2rem;
  background: ${({ $selected }) => $selected ? "rgba(201,162,39,0.08)" : "rgba(255,255,255,0.02)"};
  border: 1px solid ${({ theme, $selected }) => $selected ? theme.colors.primary : theme.colors.border};
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { border-color: ${({ theme }) => theme.colors.primary}; background: rgba(201,162,39,0.05); }
`;

export const CharRadio = styled.div<{ $selected: boolean }>`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  border: 2px solid ${({ theme, $selected }) => $selected ? theme.colors.primary : theme.colors.border};
  background: ${({ theme, $selected }) => $selected ? theme.colors.primary : "transparent"};
  flex-shrink: 0;
  transition: all 0.2s;
`;

export const CharInfo = styled.div`
  flex: 1;
`;

export const CharName = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const CharMeta = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 0.2rem;
`;

export const DeadBadge = styled.span`
  font-size: 1.2rem;
  padding: 0.4rem 1rem;
  background: rgba(231,76,60,0.1);
  border: 1px solid rgba(231,76,60,0.3);
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.8rem;
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: 1.4rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) { background: ${({ theme }) => theme.colors.primaryLight}; transform: translateY(-1px); }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export const BackBtn = styled.button`
  padding: 1.4rem 2rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.4rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { border-color: ${({ theme }) => theme.colors.textMuted}; color: ${({ theme }) => theme.colors.text}; }
`;

export const ErrorMessage = styled.div`
  padding: 1.2rem 1.6rem;
  background: rgba(231,76,60,0.08);
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.error};
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1.6rem;
`;

const pulse = keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.05)}`;

export const SuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  text-align: center;
  padding: 2rem 0;
`;

export const SuccessIcon = styled.div`
  color: ${({ theme }) => theme.colors.success};
  animation: ${pulse} 1.5s ease-in-out 1;
`;

export const SuccessTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.success};
  letter-spacing: 0.06em;
`;

export const SuccessText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 40rem;
`;
