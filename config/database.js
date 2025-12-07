const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Teste de conexão CORRETO
pool.getConnection((err, conn) => {
    if (err) {
        console.error("❌ Erro ao conectar no MySQL:", err.message);
        return;
    }

    console.log("✅ Conectado ao MySQL com sucesso!");
    conn.release();
});

// Exporta versão com Promise para usar nos models/controllers
module.exports = pool.promise();
