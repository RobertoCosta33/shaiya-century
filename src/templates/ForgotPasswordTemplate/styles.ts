import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

export const BackgroundSide = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, transparent 40%, rgba(10, 14, 23, 0.85) 100%);
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  filter: brightness(0.75) saturate(0.85);
`;

export const FormSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3.2rem;
  background: rgba(10, 14, 23, 0.98);
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 48rem;
    min-width: 48rem;
    padding: 4rem 5.2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 40rem;
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 3.2rem;
  padding-bottom: 2.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
`;

export const LogoImage = styled.img`
  height: 4rem;
  width: auto;
`;

export const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-shadow: 0 0 2rem rgba(201, 162, 39, 0.5);
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: 0.8rem;
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  margin-bottom: 2.4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: -0.8rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.6rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.06);
  }

  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1.4rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-1px);
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

export const ErrorMessage = styled.div`
  padding: 1.2rem 1.6rem;
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.error};
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1.6rem;
`;

export const SuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 3.2rem 2.4rem;
  background: rgba(39, 174, 96, 0.05);
  border: 1px solid rgba(39, 174, 96, 0.3);
  border-radius: 0.8rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const SuccessIcon = styled.div`
  color: ${({ theme }) => theme.colors.success};
`;

export const SuccessTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.success};
  letter-spacing: 0.06em;
`;

export const SuccessText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const PasswordDisplay = styled.div`
  padding: 1.2rem 2.4rem;
  background: rgba(10, 14, 23, 0.8);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.6rem;
  font-family: monospace;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.2em;
`;

export const BackButton = styled.span`
  display: inline-block;
  margin-top: 0.8rem;
  padding: 1rem 2.4rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 700;
  font-size: 1.4rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover { background: ${({ theme }) => theme.colors.primaryLight}; }
`;

export const LinkText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  margin-top: 2rem;

  a { color: ${({ theme }) => theme.colors.primary}; }
`;
