import type { NextApiRequest, NextApiResponse } from "next";
import sql from "mssql";

const sqlConfig: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST!,
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
  options: { encrypt: false, trustServerCertificate: true },
};

const classNames: Record<number, string> = {
  0: "Fighter", 1: "Defender", 2: "Ranger", 3: "Archer", 4: "Mage", 5: "Priest",
  6: "Warrior", 7: "Guardian", 8: "Assassin", 9: "Hunter", 10: "Pagan", 11: "Oracle",
};

export type DeadChar = {
  charId: number;
  charName: string;
  class: string;
  level: number;
};

type ResponseData = {
  success: boolean;
  message?: string;
  chars?: DeadChar[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let pool: sql.ConnectionPool | null = null;

  try {
    pool = await sql.connect(sqlConfig);

    // GET — listar personagens mortos do usuário
    if (req.method === "GET") {
      const { username, password } = req.query as { username: string; password: string };

      if (!username || !password) {
        return res.status(400).json({ success: false, message: "Usuário e senha obrigatórios." });
      }

      const authCheck = await pool
        .request()
        .input("u", sql.VarChar(50), username)
        .input("p", sql.VarChar(50), password)
        .query("SELECT UserUID FROM PS_UserData.dbo.Users_Master WHERE UserID = @u AND Pw = @p");

      if (authCheck.recordset.length === 0) {
        return res.status(401).json({ success: false, message: "Usuário ou senha incorretos." });
      }

      const chars = await pool
        .request()
        .input("u", sql.VarChar(50), username)
        .query(`
          SELECT c.CharID, c.CharName, c.Job, c.Level
          FROM PS_GameData.dbo.Chars AS c
          INNER JOIN PS_GameData.dbo.UserMaxGrow AS umg ON umg.UserUID = c.UserUID
          INNER JOIN PS_UserData.dbo.Users_Master AS um ON um.UserUID = c.UserUID
          WHERE um.UserID = @u AND c.Del = 1
        `);

      const result: DeadChar[] = chars.recordset.map((r) => ({
        charId: r.CharID,
        charName: r.CharName,
        class: classNames[r.Job] ?? "Unknown",
        level: r.Level,
      }));

      return res.status(200).json({ success: true, chars: result });
    }

    // POST — ressuscitar personagem
    if (req.method === "POST") {
      const { username, password, charId } = req.body;

      if (!username || !password || !charId) {
        return res.status(400).json({ success: false, message: "Dados incompletos." });
      }

      const authCheck = await pool
        .request()
        .input("u", sql.VarChar(50), username)
        .input("p", sql.VarChar(50), password)
        .query("SELECT UserUID FROM PS_UserData.dbo.Users_Master WHERE UserID = @u AND Pw = @p");

      if (authCheck.recordset.length === 0) {
        return res.status(401).json({ success: false, message: "Usuário ou senha incorretos." });
      }

      // Encontrar slot livre (0-4)
      const slotResult = await pool
        .request()
        .input("u", sql.VarChar(50), username)
        .query(`
          SELECT MIN(Slots.Slot) AS OpenSlot
          FROM (
            SELECT 0 AS Slot UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
          ) AS Slots
          LEFT JOIN (
            SELECT c.Slot
            FROM PS_UserData.dbo.Users_Master AS um
            INNER JOIN PS_GameData.dbo.Chars AS c ON c.UserUID = um.UserUID
            WHERE um.UserID = @u AND c.Del = 0
          ) AS Chars ON Chars.Slot = Slots.Slot
          WHERE Chars.Slot IS NULL
        `);

      const openSlot = slotResult.recordset[0]?.OpenSlot;

      if (openSlot === null || openSlot === undefined || openSlot > 4) {
        return res.status(400).json({ success: false, message: "Nenhum slot disponível." });
      }

      await pool
        .request()
        .input("slot", sql.Int, openSlot)
        .input("charId", sql.Int, parseInt(charId))
        .query(`
          UPDATE PS_GameData.dbo.Chars
          SET Del = 0, Slot = @slot, Map = 42, PosX = 63, PosZ = 57, DeleteDate = NULL
          WHERE CharID = @charId
        `);

      return res.status(200).json({
        success: true,
        message: `Personagem ressuscitado com sucesso no slot ${openSlot + 1}.`,
      });
    }

    return res.status(405).json({ success: false, message: "Método não permitido." });
  } catch (err) {
    console.error("Erro na ressurreição:", err);
    return res.status(500).json({ success: false, message: "Erro interno. Tente novamente." });
  } finally {
    if (pool) await pool.close();
  }
}
