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

function generatePassword(length = 8): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

type ResponseData = { success: boolean; message: string; newPassword?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Método não permitido." });
  }

  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: "E-mail inválido." });
  }

  let pool: sql.ConnectionPool | null = null;

  try {
    pool = await sql.connect(sqlConfig);

    const check = await pool
      .request()
      .input("email", sql.VarChar(100), email)
      .query("SELECT UserUID FROM Users_Master WHERE Enpassword = @email");

    if (check.recordset.length === 0) {
      return res.status(404).json({ success: false, message: "E-mail não encontrado." });
    }

    const novaSenha = generatePassword(8);

    await pool
      .request()
      .input("senha", sql.VarChar(50), novaSenha)
      .input("email", sql.VarChar(100), email)
      .query("UPDATE Users_Master SET Pw = @senha WHERE Enpassword = @email");

    return res.status(200).json({
      success: true,
      message: "Senha redefinida com sucesso.",
      newPassword: novaSenha,
    });
  } catch (err) {
    console.error("Erro ao recuperar senha:", err);
    return res.status(500).json({ success: false, message: "Erro interno. Tente novamente." });
  } finally {
    if (pool) await pool.close();
  }
}
