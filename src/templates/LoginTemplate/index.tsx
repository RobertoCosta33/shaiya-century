import { useTranslations } from "next-intl";
import LoginForm from "components/ComplexComponents/LoginForm";
import * as S from "./styles";

const LoginTemplate = () => {
  const t = useTranslations("header");

  return (
    <S.Page>
      <S.Main>
        {/* Imagem lado esquerdo */}
        <S.BackgroundSide>
          <S.BackgroundImage
            src="/images/dark-lord-2.png"
            alt="Dark Lord"
          />
        </S.BackgroundSide>

        {/* Formulário lado direito */}
        <S.FormSide>
          <S.Card>
            <S.LogoWrapper>
              <S.LogoImage src="/images/logo.png" alt={t("logo-alt")} />
              <S.LogoText>{t("brand")}</S.LogoText>
            </S.LogoWrapper>
            <LoginForm />
          </S.Card>
        </S.FormSide>
      </S.Main>
    </S.Page>
  );
};

export default LoginTemplate;
