import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import TextField from "components/SimpleComponents/TextField";
import Button from "components/SimpleComponents/Button";
import * as S from "./styles";

const RegisterForm = () => {
  const t = useTranslations("register");
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

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
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, senha: password, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || t("error"));
        return;
      }

      setSuccess(data.message);
      // Redireciona para login após 2 segundos
      setTimeout(() => router.push("/login"), 2000);
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
      {success && <S.SuccessMessage>{success}</S.SuccessMessage>}

      <TextField
        name="nome"
        type="text"
        label={t("name-label")}
        placeholder={t("name-placeholder")}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
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
