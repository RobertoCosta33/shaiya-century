import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  height: 100%;
  overflow: hidden;
`;

/* Lado esquerdo — imagem */
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
    background: linear-gradient(
      to right,
      transparent 40%,
      rgba(10, 14, 23, 0.85) 100%
    );
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  filter: brightness(0.75) saturate(0.85);
`;

/* Lado direito — formulário */
export const FormSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3.2rem;
  background: rgba(10, 14, 23, 0.98);
  position: relative;
  z-index: 1;
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

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 3.2rem;
  padding-bottom: 2.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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
