import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import TextField from "components/SimpleComponents/TextField";
import Button from "components/SimpleComponents/Button";
import { useAuth } from "providers/AuthProvider";
import * as S from "./styles";

const RegisterForm = () => {
  const t = useTranslations("register");
  const router = useRouter();
  const { register } = useAuth();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError(t("password-mismatch"));
      return;
    }

    if (password.length < 6) {
      setError(t("password-min"));
      return;
    }

    setLoading(true);

    try {
      await register(email, password, displayName);
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
        name="displayName"
        type="text"
        label={t("name-label")}
        placeholder={t("name-placeholder")}
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        required
      />

      <TextField
        name="email"
        type="email"
        label={t("email-label")}
        placeholder={t("email-placeholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

      <TextField
        name="confirmPassword"
        type="password"
        label={t("confirm-password-label")}
        placeholder={t("confirm-password-placeholder")}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? t("loading") : t("submit")}
      </Button>

      <S.LinkText>
        {t("has-account")}{" "}
        <Link href="/login">{t("login-link")}</Link>
      </S.LinkText>
    </S.Form>
  );
};

export default RegisterForm;
