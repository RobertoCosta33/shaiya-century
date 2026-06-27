import type { NextApiRequest, NextApiResponse } from "next";
import sql from "mssql";

const sqlConfig: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST!,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Método não permitido." });
  }

  const { nome, senha, email } = req.body;

  // Validações básicas
  if (!nome || !senha || !email) {
    return res.status(400).json({ success: false, message: "Preencha todos os campos." });
  }

  if (nome.length < 3 || nome.length > 20) {
    return res.status(400).json({ success: false, message: "Nome deve ter entre 3 e 20 caracteres." });
  }

  if (senha.length < 6) {
    return res.status(400).json({ success: false, message: "Senha deve ter no mínimo 6 caracteres." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: "E-mail inválido." });
  }

  // Só letras, números e underscore no nome
  if (!/^[a-zA-Z0-9_]+$/.test(nome)) {
    return res.status(400).json({ success: false, message: "Nome só pode conter letras, números e underscore." });
  }

  let pool: sql.ConnectionPool | null = null;

  try {
    pool = await sql.connect(sqlConfig);

    // Verificar se usuário ou email já existem (query parametrizada)
    const checkResult = await pool
      .request()
      .input("nome", sql.VarChar(50), nome)
      .input("email", sql.VarChar(100), email)
      .query("SELECT UserUID FROM Users_Master WHERE UserID = @nome OR Enpassword = @email");

    if (checkResult.recordset.length > 0) {
      return res.status(409).json({ success: false, message: "Usuário ou e-mail já cadastrado." });
    }

    // Buscar próximo UserUID
    const uidResult = await pool
      .request()
      .query("SELECT MAX(UserUID) AS MaxUserUID FROM Users_Master");

    const nextUserUID = (uidResult.recordset[0].MaxUserUID || 0) + 1;

    const now = new Date();
    const joinDate = now.toISOString().slice(0, 19).replace("T", " ");
    const anoAtual = now.getFullYear();
    const leaveDate = (anoAtual + 30).toString();
    const clientIp =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "0.0.0.0";

    // Inserir novo usuário (query parametrizada — sem SQL injection)
    await pool
      .request()
      .input("uid", sql.Int, nextUserUID)
      .input("userId", sql.VarChar(50), nome)
      .input("pw", sql.VarChar(50), senha)
      .input("joinDate", sql.VarChar(20), joinDate)
      .input("leaveDate", sql.VarChar(10), leaveDate)
      .input("ip", sql.VarChar(20), clientIp)
      .input("email", sql.VarChar(100), email)
      .input("birth", sql.VarChar(10), anoAtual.toString())
      .query(`
        INSERT INTO Users_Master
          (UserUID, UserID, Pw, JoinDate, Admin, AdminLevel, UseQueue, Status,
           Leave, LeaveDate, UserType, UserIp, Point, Enpassword, Birth)
        VALUES
          (@uid, @userId, @pw, @joinDate, 'False', 0, 'False', 0,
           0, @leaveDate, 'C', @ip, 0, @email, @birth)
      `);

    return res.status(201).json({ success: true, message: "Conta criada com sucesso!" });
  } catch (err) {
    console.error("Erro ao registrar:", err);
    return res.status(500).json({ success: false, message: "Erro interno. Tente novamente." });
  } finally {
    if (pool) await pool.close();
  }
}
