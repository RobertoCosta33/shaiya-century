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
  max-width: 110rem;
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
  font-size: 5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1.2rem;

  span { color: ${({ theme }) => theme.colors.primary}; }
`;

export const PageSubtitle = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  margin-bottom: 4.8rem;
`;

const spin = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;

export const StateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 6rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.6rem;
`;

export const Spinner = styled.div`
  width: 4rem;
  height: 4rem;
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const ErrorBox = styled.div`
  padding: 2rem;
  background: rgba(231,76,60,0.08);
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  font-size: 1.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.2rem;
  overflow: hidden;
`;

export const TableHead = styled.thead`
  background: rgba(201, 162, 39, 0.06);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Th = styled.th`
  padding: 1.6rem 2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;

  &:first-child { text-align: center; }
`;

export const TableRow = styled.tr<{ $isTop3: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $isTop3 }) => $isTop3 ? "rgba(201,162,39,0.04)" : "transparent"};
  transition: background 0.15s;

  &:last-child { border-bottom: none; }
  &:hover { background: rgba(255,255,255,0.03); }
`;

export const Td = styled.td`
  padding: 1.4rem 2rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  vertical-align: middle;
`;

export const Medal = styled.span<{ $rank: number }>`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

export const RankNum = styled.span`
  display: block;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const PlayerName = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.03em;
`;

export const ClassBadge = styled.span`
  padding: 0.4rem 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  background: rgba(255,255,255,0.05);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.4rem;
`;

export const KillsValue = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const KdrValue = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const TierBadge = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
`;
