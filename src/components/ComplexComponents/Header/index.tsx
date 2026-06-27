import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "components/SimpleComponents/Button";
import { useAuth } from "providers/AuthProvider";
import * as S from "./styles";

const Header = () => {
  const t = useTranslations("header");
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <S.Header>
      <S.LogoWrapper href="/">
        <S.LogoImage src="/images/logo.png" alt={t("logo-alt")} />
        <S.LogoText>{t("brand")}</S.LogoText>
      </S.LogoWrapper>

      <S.Nav>
        <S.NavLink href="/">{t("home")}</S.NavLink>
        <S.NavLink href="#features">{t("features")}</S.NavLink>
        <S.NavLink href="#classes">{t("classes")}</S.NavLink>
        <S.NavLink href="#download">{t("download")}</S.NavLink>
        <S.NavLink href="/ranking">{t("ranking")}</S.NavLink>
        <S.NavLink href="/resurrect">{t("resurrect")}</S.NavLink>
      </S.Nav>

      <S.AuthButtons>
        {user ? (
          <>
            <S.UserName>{user.displayName || user.email}</S.UserName>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              {t("logout")}
            </Button>
          </>
        ) : (
          <>
            <Link href="/login">
              <Button variant="ghost" size="sm">{t("login")}</Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="sm">{t("register")}</Button>
            </Link>
          </>
        )}
      </S.AuthButtons>
    </S.Header>
  );
};

export default Header;
