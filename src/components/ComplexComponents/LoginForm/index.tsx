import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import TextField from "components/SimpleComponents/TextField";
import Button from "components/SimpleComponents/Button";
import { useAuth } from "providers/AuthProvider";
import * as S from "./styles";

const LoginForm = () => {
  const t = useTranslations("login");
  const router = useRouter();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(username, password);
      router.push("/");
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>{t("title")}</S.Title>
      <S.Subtitle>{t("subtitle")}</S.Subtitle>

      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

      <TextField
        name="username"
        type="text"
        label={t("username-label")}
        placeholder={t("username-placeholder")}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <TextField
        name="password"
        type="password"
        label={t("password-label")}
        placeholder={t("password-placeholder")}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <S.ForgotLink>
        <Link href="/forgot-password">{t("forgot-password")}</Link>
      </S.ForgotLink>

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? t("loading") : t("submit")}
      </Button>

      <S.LinkText>
        {t("no-account")}{" "}
        <Link href="/register">{t("register-link")}</Link>
      </S.LinkText>
    </S.Form>
  );
};

export default LoginForm;
