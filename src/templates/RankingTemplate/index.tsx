import { useEffect, useState } from "react";
import Header from "components/ComplexComponents/Header";
import Footer from "components/ComplexComponents/Footer";
import type { RankingPlayer } from "pages/api/ranking";
import * as S from "./styles";

const RANK_LABELS = [
  "Sem Rank", "Bronze I", "Bronze II", "Bronze III",
  "Prata I", "Prata II", "Prata III",
  "Ouro I", "Ouro II", "Ouro III",
  "Platina I", "Platina II", "Platina III",
  "Diamante I", "Diamante II", "Diamante III", "Lendário",
];

const RankingTemplate = () => {
  const [players, setPlayers] = useState<RankingPlayer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/ranking")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setPlayers(data.data);
        else setError(data.message || "Erro ao carregar ranking.");
      })
      .catch(() => setError("Erro ao conectar ao servidor."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <S.Page>
      <Header />
      <S.Main>
        <S.Container>
          <S.PageLabel>Classificação</S.PageLabel>
          <S.PageTitle>Ranking <span>PvP</span></S.PageTitle>
          <S.PageSubtitle>Top 25 guerreiros com mais kills no servidor</S.PageSubtitle>

          {loading && (
            <S.StateBox>
              <S.Spinner />
              <p>Carregando ranking...</p>
            </S.StateBox>
          )}

          {error && <S.ErrorBox>{error}</S.ErrorBox>}

          {!loading && !error && (
            <S.Table>
              <S.TableHead>
                <tr>
                  <S.Th>#</S.Th>
                  <S.Th>Personagem</S.Th>
                  <S.Th>Classe</S.Th>
                  <S.Th>Nível</S.Th>
                  <S.Th>Kills</S.Th>
                  <S.Th>Mortes</S.Th>
                  <S.Th>KDR</S.Th>
                  <S.Th>Tier</S.Th>
                </tr>
              </S.TableHead>
              <tbody>
                {players.map((p) => (
                  <S.TableRow key={p.rank} $isTop3={p.rank <= 3}>
                    <S.Td>
                      {p.rank <= 3 ? (
                        <S.Medal $rank={p.rank}>{p.rank === 1 ? "🥇" : p.rank === 2 ? "🥈" : "🥉"}</S.Medal>
                      ) : (
                        <S.RankNum>{p.rank}</S.RankNum>
                      )}
                    </S.Td>
                    <S.Td><S.PlayerName>{p.name}</S.PlayerName></S.Td>
                    <S.Td><S.ClassBadge>{p.class}</S.ClassBadge></S.Td>
                    <S.Td>{p.level}</S.Td>
                    <S.Td><S.KillsValue>{p.kills.toLocaleString()}</S.KillsValue></S.Td>
                    <S.Td>{p.deaths.toLocaleString()}</S.Td>
                    <S.Td><S.KdrValue>{p.kdr}</S.KdrValue></S.Td>
                    <S.Td><S.TierBadge>{RANK_LABELS[p.rankTier] ?? "Sem Rank"}</S.TierBadge></S.Td>
                  </S.TableRow>
                ))}
              </tbody>
            </S.Table>
          )}
        </S.Container>
      </S.Main>
      <Footer />
    </S.Page>
  );
};

export default RankingTemplate;
