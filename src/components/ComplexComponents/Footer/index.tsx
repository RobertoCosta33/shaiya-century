import { useTranslations } from "next-intl";
import * as S from "./styles";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <S.Footer>
      <S.Text>
        <S.Brand>{t("brand")}</S.Brand> — {t("copyright")}
      </S.Text>
    </S.Footer>
  );
};

export default Footer;
