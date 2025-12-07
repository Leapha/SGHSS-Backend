const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// LOGIN
router.post('/login', authController.login);

// LOG DE INICIALIZAÇÃO
console.log("✅ Rota de autenticação (login) carregada!");

module.exports = router;
