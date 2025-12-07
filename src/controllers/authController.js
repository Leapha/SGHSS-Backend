const jwt = require('jsonwebtoken');
require('dotenv').config();

// LOGIN SIMPLES (PROTÓTIPO)
exports.login = (req, res) => {

    const { email, senha } = req.body;

    console.log("🔑 Tentativa de login:", email);

    // SIMULA ADMIN ou PROFISSIONAL DE SAÚDE
    if (email === "admin@vidaplus.com" && senha === "123456") {

        const token = jwt.sign(
            { perfil: 'ADMIN', email },
            process.env.JWT_SECRET || "segredo",
            { expiresIn: '1h' }
        );

        console.log("✅ Login aprovado:", email);

        return res.json({
            mensagem: "Login realizado com sucesso",
            token
        });
    }

    console.log("⛔ Login negado:", email);

    return res.status(401).json({ mensagem: "Credenciais inválidas" });
};
