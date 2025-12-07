const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ erro: "Token não fornecido" });
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "segredo");

        req.user = decoded;

        console.log("✅ Token validado:", decoded.email);

        next();
    } catch (error) {
        console.error("❌ Token inválido:", error.message);
        return res.status(401).json({ erro: "Token inválido" });
    }
};