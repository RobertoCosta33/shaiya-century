import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

/* ─── HERO ─────────────────────────────────────────────────── */

export const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

export const HeroBgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
`;

export const HeroGradient = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(to bottom, rgba(10,14,23,0.55) 0%, rgba(10,14,23,0.75) 60%, rgba(10,14,23,1) 100%),
    linear-gradient(to right, rgba(10,14,23,0.3) 0%, transparent 50%, rgba(10,14,23,0.3) 100%);
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 12rem 3.2rem 6rem;
  max-width: 90rem;
  width: 100%;
`;

export const HeroBadge = styled.span`
  display: inline-block;
  padding: 0.6rem 1.8rem;
  border: 1px solid rgba(201, 162, 39, 0.6);
  border-radius: 10rem;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2.4rem;
  background: rgba(201, 162, 39, 0.08);
  backdrop-filter: blur(4px);
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 0.95;
  margin-bottom: 1.6rem;

  span {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    text-shadow:
      0 0 4rem rgba(201, 162, 39, 0.6),
      0 0 8rem rgba(201, 162, 39, 0.3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 5.6rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 4.2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 2.8rem;
`;

export const HeroDescription = styled.p`
  font-size: 1.8rem;
  color: rgba(232, 230, 227, 0.85);
  line-height: 1.8;
  max-width: 60rem;
  margin: 0 auto 4.8rem;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HeroScrollHint = styled.div`
  position: absolute;
  bottom: 3.2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  animation: bounce 2s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(6px); }
  }

  svg { opacity: 0.5; }
`;

/* ─── BANNER ──────────────────────────────────────────────── */

export const BannerSection = styled.section`
  position: relative;
  height: 32rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 12rem;
    background: linear-gradient(to bottom, ${({ theme }) => theme.colors.background}, transparent);
    z-index: 1;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 12rem;
    background: linear-gradient(to top, ${({ theme }) => theme.colors.backgroundAlt}, transparent);
    z-index: 1;
    pointer-events: none;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  filter: brightness(0.6) saturate(1.05);
`;

/* ─── FEATURES ────────────────────────────────────────────── */

export const Section = styled.section`
  padding: 8rem 3.2rem;
`;

export const SectionLabel = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 1.2rem;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.06em;
  text-align: center;
  margin-bottom: 1.2rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  max-width: 58rem;
  margin: 0 auto 5.6rem;
  line-height: 1.7;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  max-width: 120rem;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.2rem;
  overflow: hidden;
  box-shadow: 0 2.4rem 6.4rem rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    border-radius: 0.8rem;
  }
`;

export const FeatureCard = styled.div`
  padding: 4rem 3.2rem;
  background: rgba(17, 24, 39, 0.9);
  text-align: left;
  transition: all 0.25s ease;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 3px;
    height: 0;
    background: ${({ theme }) => theme.colors.primary};
    transition: height 0.3s ease;
  }

  &:hover {
    background: rgba(21, 28, 44, 1);
    &::before { height: 100%; }
  }
`;

export const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.2rem;
  height: 5.2rem;
  margin-bottom: 2rem;
  background: rgba(201, 162, 39, 0.08);
  border: 1px solid rgba(201, 162, 39, 0.2);
  border-radius: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const FeatureTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.04em;
  margin-bottom: 1rem;
`;

export const FeatureDescription = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

/* ─── FACTIONS ────────────────────────────────────────────── */

export const FactionsSection = styled.section`
  padding: 8rem 3.2rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const FactionsInner = styled.div``;

export const FactionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const FactionCard = styled.div<{ $faction: "alliance" | "fury" }>`
  position: relative;
  overflow: hidden;
  border-radius: 1.2rem;
  min-height: 56rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid ${({ theme, $faction }) =>
    $faction === "alliance"
      ? "rgba(74, 144, 217, 0.3)"
      : "rgba(192, 57, 43, 0.3)"};
  box-shadow: 0 1.6rem 4.8rem rgba(0, 0, 0, 0.6);
  cursor: default;

  &:hover img {
    transform: scale(1.05);
    filter: brightness(0.65) saturate(1.1);
  }
`;

export const FactionBgImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: brightness(0.5) saturate(0.9);
  transition: transform 0.6s ease, filter 0.6s ease;
`;

export const FactionOverlay = styled.div<{ $faction: "alliance" | "fury" }>`
  position: absolute;
  inset: 0;
  background: ${({ $faction }) =>
    $faction === "alliance"
      ? "linear-gradient(to top, rgba(10,20,50,0.95) 0%, rgba(74,144,217,0.15) 50%, transparent 75%)"
      : "linear-gradient(to top, rgba(30,8,8,0.95) 0%, rgba(192,57,43,0.2) 50%, transparent 75%)"};
`;

export const FactionContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 4rem;
`;

export const FactionTitle = styled.h3<{ $faction: "alliance" | "fury" }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 3.2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  color: ${({ theme, $faction }) =>
    $faction === "alliance" ? theme.colors.alliance : theme.colors.fury};
  text-shadow: 0 0 2.4rem ${({ $faction }) =>
    $faction === "alliance"
      ? "rgba(74,144,217,0.5)"
      : "rgba(192,57,43,0.5)"};
`;

export const FactionDescription = styled.p`
  font-size: 1.5rem;
  color: rgba(232, 230, 227, 0.8);
  line-height: 1.7;
  margin-bottom: 2.4rem;
  max-width: 38rem;
`;

export const ClassList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const ClassTag = styled.span`
  padding: 0.5rem 1.4rem;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(232, 230, 227, 0.85);
  background: rgba(10, 14, 23, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.4rem;
  backdrop-filter: blur(6px);
`;

/* ─── DOWNLOAD ────────────────────────────────────────────── */

export const DownloadSection = styled.section`
  padding: 8rem 3.2rem;
  background: ${({ theme }) => theme.colors.background};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 50%; transform: translateX(-50%);
    width: 80rem;
    height: 1px;
    background: linear-gradient(to right, transparent, ${({ theme }) => theme.colors.border}, transparent);
  }
`;

export const DownloadInner = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  text-align: center;
  padding: 5.6rem 4rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.6rem;
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(8px);
  position: relative;
  overflow: hidden;

  /* brilho dourado no topo */
  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.colors.primary},
      transparent
    );
  }

  /* brilho radial sutil */
  &::after {
    content: "";
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
    width: 60rem;
    height: 40rem;
    background: radial-gradient(ellipse, rgba(201,162,39,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const DownloadIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: rgba(201, 162, 39, 0.08);
  border: 1px solid rgba(201, 162, 39, 0.25);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2.4rem;
`;

export const DownloadTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;

export const DownloadDescription = styled.p`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  max-width: 46rem;
  margin: 0 auto 3.2rem;
`;

export const DownloadMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

export const DownloadMetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;

  svg { color: ${({ theme }) => theme.colors.primary}; }
`;

export const DownloadMetaDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.border};
`;

export const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem 4rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textDark};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 0.6rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0 3.2rem rgba(201, 162, 39, 0.3);

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.textDark};
    transform: translateY(-2px);
    box-shadow: 0 0 4.8rem rgba(201, 162, 39, 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`;

/* ─── CTA ─────────────────────────────────────────────────── */

export const CtaSection = styled.section`
  position: relative;
  min-height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CtaBg = styled.div`
  position: absolute;
  inset: 0;
`;

export const CtaBgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  filter: brightness(0.3) saturate(0.7);
`;

export const CtaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, ${({ theme }) => theme.colors.backgroundAlt} 0%, transparent 25%, transparent 75%, ${({ theme }) => theme.colors.background} 100%),
    radial-gradient(ellipse at 50% 50%, rgba(201,162,39,0.08) 0%, transparent 70%);
`;

export const CtaContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 6rem 3.2rem;
  max-width: 70rem;
`;

export const CtaTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 5.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  text-shadow:
    0 0 4rem rgba(201, 162, 39, 0.5),
    0 0 8rem rgba(201, 162, 39, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.6rem;
  }
`;

export const CtaDescription = styled.p`
  font-size: 1.8rem;
  color: rgba(232, 230, 227, 0.75);
  max-width: 50rem;
  margin: 0 auto 4rem;
  line-height: 1.7;
`;
