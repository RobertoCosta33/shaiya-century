import { useState, FormEvent } from "react";
import Link from "next/link";
import * as S from "./styles";

const ForgotPasswordTemplate = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setNewPassword("");
    setLoading(true);

    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      setNewPassword(data.newPassword);
    } catch {
      setError("Erro interno. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Page>
      <S.BackgroundSide>
        <S.BackgroundImage src="/images/dark-lord-1.png" alt="Dark Lord" />
      </S.BackgroundSide>

      <S.FormSide>
        <S.Card>
          <S.LogoWrapper href="/">
            <S.LogoImage src="/images/logo.png" alt="Logo" />
            <S.LogoText>Centurion</S.LogoText>
          </S.LogoWrapper>

          <S.Title>Recuperar Senha</S.Title>
          <S.Subtitle>Informe seu e-mail cadastrado</S.Subtitle>

          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

          {newPassword ? (
            <S.SuccessBox>
              <S.SuccessIcon>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </S.SuccessIcon>
              <S.SuccessTitle>Senha redefinida!</S.SuccessTitle>
              <S.SuccessText>Sua nova senha é:</S.SuccessText>
              <S.PasswordDisplay>{newPassword}</S.PasswordDisplay>
              <S.SuccessText>Anote e altere após entrar no jogo.</S.SuccessText>
              <Link href="/login">
                <S.BackButton>Ir para o Login</S.BackButton>
              </Link>
            </S.SuccessBox>
          ) : (
            <S.Form onSubmit={handleSubmit}>
              <S.Label>E-mail cadastrado</S.Label>
              <S.Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <S.SubmitButton type="submit" disabled={loading}>
                {loading ? "Verificando..." : "Recuperar Senha"}
              </S.SubmitButton>
            </S.Form>
          )}

          <S.LinkText>
            Lembrou a senha?{" "}
            <Link href="/login">Entrar</Link>
          </S.LinkText>
        </S.Card>
      </S.FormSide>
    </S.Page>
  );
};

export default ForgotPasswordTemplate;
