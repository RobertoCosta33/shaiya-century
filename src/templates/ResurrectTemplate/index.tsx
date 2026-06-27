import { useState, FormEvent } from "react";
import Header from "components/ComplexComponents/Header";
import Footer from "components/ComplexComponents/Footer";
import type { DeadChar } from "pages/api/resurrect";
import * as S from "./styles";

type Step = "login" | "select" | "done";

const ResurrectTemplate = () => {
  const [step, setStep] = useState<Step>("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [chars, setChars] = useState<DeadChar[]>([]);
  const [selectedChar, setSelectedChar] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `/api/resurrect?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
      );
      const data = await res.json();

      if (!res.ok) { setError(data.message); return; }

      if (data.chars.length === 0) {
        setError("Nenhum personagem morto encontrado nesta conta.");
        return;
      }

      setChars(data.chars);
      setStep("select");
    } catch {
      setError("Erro ao conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  };

  const handleResurrect = async (e: FormEvent) => {
    e.preventDefault();
    if (selectedChar === null) { setError("Selecione um personagem."); return; }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/resurrect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, charId: selectedChar }),
      });
      const data = await res.json();

      if (!res.ok) { setError(data.message); return; }

      setSuccessMsg(data.message);
      setStep("done");
    } catch {
      setError("Erro ao conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Page>
      <Header />
      <S.Main>
        <S.Container>
          <S.PageLabel>Ferramentas</S.PageLabel>
          <S.PageTitle>Ressurreição <span>de Personagem</span></S.PageTitle>
          <S.PageSubtitle>Ressuscite personagens que morreram sem runa de ressurreição</S.PageSubtitle>

          <S.Card>
            {step === "login" && (
              <>
                <S.CardTitle>Identificação da Conta</S.CardTitle>
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                <S.Form onSubmit={handleLogin}>
                  <S.Field>
                    <S.Label>Nome de usuário</S.Label>
                    <S.Input
                      type="text"
                      placeholder="Seu login do jogo"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </S.Field>
                  <S.Field>
                    <S.Label>Senha</S.Label>
                    <S.Input
                      type="password"
                      placeholder="Sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </S.Field>
                  <S.SubmitButton type="submit" disabled={loading}>
                    {loading ? "Verificando..." : "Buscar Personagens"}
                  </S.SubmitButton>
                </S.Form>
              </>
            )}

            {step === "select" && (
              <>
                <S.CardTitle>Selecione o Personagem</S.CardTitle>
                <S.AccountInfo>Conta: <strong>{username}</strong></S.AccountInfo>
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                <S.Form onSubmit={handleResurrect}>
                  <S.CharList>
                    {chars.map((c) => (
                      <S.CharOption
                        key={c.charId}
                        $selected={selectedChar === c.charId}
                        onClick={() => setSelectedChar(c.charId)}
                      >
                        <S.CharRadio $selected={selectedChar === c.charId} />
                        <S.CharInfo>
                          <S.CharName>{c.charName}</S.CharName>
                          <S.CharMeta>{c.class} · Nível {c.level}</S.CharMeta>
                        </S.CharInfo>
                        <S.DeadBadge>💀 Morto</S.DeadBadge>
                      </S.CharOption>
                    ))}
                  </S.CharList>
                  <S.ButtonRow>
                    <S.BackBtn type="button" onClick={() => { setStep("login"); setError(""); }}>
                      Voltar
                    </S.BackBtn>
                    <S.SubmitButton type="submit" disabled={loading || selectedChar === null}>
                      {loading ? "Ressuscitando..." : "Ressuscitar"}
                    </S.SubmitButton>
                  </S.ButtonRow>
                </S.Form>
              </>
            )}

            {step === "done" && (
              <S.SuccessBox>
                <S.SuccessIcon>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </S.SuccessIcon>
                <S.SuccessTitle>Ressurreição Concluída!</S.SuccessTitle>
                <S.SuccessText>{successMsg}</S.SuccessText>
                <S.SubmitButton
                  as="button"
                  onClick={() => { setStep("login"); setUsername(""); setPassword(""); setChars([]); setSelectedChar(null); setSuccessMsg(""); }}
                >
                  Ressuscitar Outro
                </S.SubmitButton>
              </S.SuccessBox>
            )}
          </S.Card>
        </S.Container>
      </S.Main>
      <Footer />
    </S.Page>
  );
};

export default ResurrectTemplate;
