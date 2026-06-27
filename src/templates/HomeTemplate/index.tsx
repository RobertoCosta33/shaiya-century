import { useTranslations } from "next-intl";
import Link from "next/link";
import Header from "components/ComplexComponents/Header";
import Footer from "components/ComplexComponents/Footer";
import Button from "components/SimpleComponents/Button";
import SwordIcon from "components/SimpleComponents/Icons/sword-icon";
import ShieldIcon from "components/SimpleComponents/Icons/shield-icon";
import * as S from "./styles";

const HomeTemplate = () => {
  const t = useTranslations("home");

  const features = [
    {
      icon: <SwordIcon size={28} />,
      title: t("features.pvp.title"),
      description: t("features.pvp.description"),
    },
    {
      icon: <ShieldIcon size={28} />,
      title: t("features.factions.title"),
      description: t("features.factions.description"),
    },
    {
      icon: <SwordIcon size={28} />,
      title: t("features.classes.title"),
      description: t("features.classes.description"),
    },
    {
      icon: <ShieldIcon size={28} />,
      title: t("features.goddess.title"),
      description: t("features.goddess.description"),
    },
    {
      icon: <SwordIcon size={28} />,
      title: t("features.world.title"),
      description: t("features.world.description"),
    },
    {
      icon: <ShieldIcon size={28} />,
      title: t("features.free.title"),
      description: t("features.free.description"),
    },
  ];

  const allianceClasses = [
    t("classes.fighter"),
    t("classes.defender"),
    t("classes.priest"),
    t("classes.archer"),
    t("classes.mage"),
    t("classes.ranger"),
  ];

  const furyClasses = [
    t("classes.warrior"),
    t("classes.guardian"),
    t("classes.pagan"),
    t("classes.assassin"),
    t("classes.oracle"),
    t("classes.hunter"),
  ];

  return (
    <S.Page>
      <Header />

      {/* HERO */}
      <S.Hero>
        <S.HeroBg>
          <S.HeroBgImage src="/images/heroes.jpg" alt="Shaiya Heroes" loading="eager" />
          <S.HeroGradient />
        </S.HeroBg>
        <S.HeroContent>
          <S.HeroBadge>Servidor Privado</S.HeroBadge>
          <S.HeroTitle>
            <span>Shaiya</span>
            {t("hero.title")}
          </S.HeroTitle>
          <S.HeroSubtitle>{t("hero.subtitle")}</S.HeroSubtitle>
          <S.HeroDescription>{t("hero.description")}</S.HeroDescription>
          <S.HeroButtons>
            <Link href="/register">
              <Button size="lg">{t("hero.register")}</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">{t("hero.login")}</Button>
            </Link>
          </S.HeroButtons>
        </S.HeroContent>
        <S.HeroScrollHint>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </S.HeroScrollHint>
      </S.Hero>

      {/* BANNER */}
      <S.BannerSection>
        <S.BannerImage src="/images/banner.jpg" alt="Shaiya Banner" />
      </S.BannerSection>

      {/* FEATURES */}
      <S.Section id="features">
        <S.SectionLabel>O Que Nos Define</S.SectionLabel>
        <S.SectionTitle>
          Forje Sua <span>Lenda</span>
        </S.SectionTitle>
        <S.SectionSubtitle>{t("features.subtitle")}</S.SectionSubtitle>
        <S.FeaturesGrid>
          {features.map((feature) => (
            <S.FeatureCard key={feature.title}>
              <S.FeatureIcon>{feature.icon}</S.FeatureIcon>
              <S.FeatureTitle>{feature.title}</S.FeatureTitle>
              <S.FeatureDescription>{feature.description}</S.FeatureDescription>
            </S.FeatureCard>
          ))}
        </S.FeaturesGrid>
      </S.Section>

      {/* FACTIONS */}
      <S.FactionsSection id="classes">
        <S.FactionsInner>
          <S.SectionLabel>Escolha Seu Destino</S.SectionLabel>
          <S.SectionTitle>
            <span>Luz</span> contra <span style={{ color: "#c0392b" }}>Fury</span>
          </S.SectionTitle>
          <S.SectionSubtitle>{t("factions.subtitle")}</S.SectionSubtitle>
          <S.FactionsGrid>
            <S.FactionCard $faction="alliance">
              <S.FactionBgImage src="/images/goddess.jpg" alt="Alliance" />
              <S.FactionOverlay $faction="alliance" />
              <S.FactionContent>
                <S.FactionTitle $faction="alliance">{t("factions.alliance.title")}</S.FactionTitle>
                <S.FactionDescription>{t("factions.alliance.description")}</S.FactionDescription>
                <S.ClassList>
                  {allianceClasses.map((cls) => (
                    <S.ClassTag key={cls}>{cls}</S.ClassTag>
                  ))}
                </S.ClassList>
              </S.FactionContent>
            </S.FactionCard>

            <S.FactionCard $faction="fury">
              <S.FactionBgImage src="/images/dark-lord-1.png" alt="Fury" />
              <S.FactionOverlay $faction="fury" />
              <S.FactionContent>
                <S.FactionTitle $faction="fury">{t("factions.fury.title")}</S.FactionTitle>
                <S.FactionDescription>{t("factions.fury.description")}</S.FactionDescription>
                <S.ClassList>
                  {furyClasses.map((cls) => (
                    <S.ClassTag key={cls}>{cls}</S.ClassTag>
                  ))}
                </S.ClassList>
              </S.FactionContent>
            </S.FactionCard>
          </S.FactionsGrid>
        </S.FactionsInner>
      </S.FactionsSection>

      {/* CTA */}
      <S.CtaSection>
        <S.CtaBg>
          <S.CtaBgImage src="/images/dark-lord-2.png" alt="Dark Lord" />
          <S.CtaOverlay />
        </S.CtaBg>
        <S.CtaContent>
          <S.CtaTitle>{t("cta.title")}</S.CtaTitle>
          <S.CtaDescription>{t("cta.description")}</S.CtaDescription>
          <Link href="/register">
            <Button size="lg">{t("cta.button")}</Button>
          </Link>
        </S.CtaContent>
      </S.CtaSection>

      <Footer />
    </S.Page>
  );
};

export default HomeTemplate;
