import type { NextApiRequest, NextApiResponse } from "next";
import sql from "mssql";

const sqlConfig: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "PS_GameData",
  server: process.env.DB_HOST!,
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
  options: { encrypt: false, trustServerCertificate: true },
};

const classNames: Record<number, string> = {
  0: "Fighter", 1: "Defender", 2: "Ranger", 3: "Archer", 4: "Mage", 5: "Priest",
  6: "Warrior", 7: "Guardian", 8: "Assassin", 9: "Hunter", 10: "Pagan", 11: "Oracle",
};

function getRankImage(kills: number): number {
  if (kills >= 200000) return 16;
  if (kills >= 150000) return 15;
  if (kills >= 130000) return 14;
  if (kills >= 110000) return 13;
  if (kills >= 90000) return 12;
  if (kills >= 70000) return 11;
  if (kills >= 50000) return 10;
  if (kills >= 40000) return 9;
  if (kills >= 30000) return 8;
  if (kills >= 20000) return 7;
  if (kills >= 10000) return 6;
  if (kills >= 5000) return 5;
  if (kills >= 1000) return 4;
  if (kills >= 300) return 3;
  if (kills >= 50) return 2;
  if (kills >= 1) return 1;
  return 0;
}

export type RankingPlayer = {
  rank: number;
  name: string;
  class: string;
  level: number;
  kills: number;
  deaths: number;
  kdr: string;
  rankTier: number;
};

type ResponseData = { success: boolean; data?: RankingPlayer[]; message?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Método não permitido." });
  }

  let pool: sql.ConnectionPool | null = null;

  try {
    pool = await sql.connect(sqlConfig);

    const result = await pool.request().query(`
      SELECT TOP 25
        CharName, Job, Level, k1 AS Kills, k2 AS Deaths
      FROM dbo.Chars
      ORDER BY k1 DESC
    `);

    const players: RankingPlayer[] = result.recordset.map((row, index) => {
      const kills = row.Kills || 0;
      const deaths = row.Deaths || 0;
      const kdr = deaths === 0
        ? kills.toFixed(3)
        : (kills / deaths).toFixed(3);

      return {
        rank: index + 1,
        name: row.CharName,
        class: classNames[row.Job] ?? "Unknown",
        level: row.Level,
        kills,
        deaths,
        kdr,
        rankTier: getRankImage(kills),
      };
    });

    return res.status(200).json({ success: true, data: players });
  } catch (err) {
    console.error("Erro ao buscar ranking:", err);
    return res.status(500).json({ success: false, message: "Erro ao buscar ranking." });
  } finally {
    if (pool) await pool.close();
  }
}
