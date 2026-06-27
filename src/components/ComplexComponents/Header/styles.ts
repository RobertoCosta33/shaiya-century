import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  background: linear-gradient(
    180deg,
    rgba(10, 14, 23, 0.95) 0%,
    rgba(10, 14, 23, 0.7) 100%
  );
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(1rem);
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-decoration: none;
`;

export const LogoImage = styled.img`
  height: 4rem;
  width: auto;
  object-fit: contain;
`;

export const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  text-transform: uppercase;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const UserName = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;
