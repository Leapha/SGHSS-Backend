const express = require('express');
const path = require("path");
const cors = require('cors');
require('dotenv').config();
require(path.resolve(__dirname, "../config/database"));



const pacienteRoutes = require('./routes/pacienteRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/pacientes', pacienteRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('API SGHSS VidaPlus rodando...');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("✅ SGHSS VidaPlus Backend iniciado com sucesso!");
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`🌐 Acesso local: http://localhost:${PORT}`);
});