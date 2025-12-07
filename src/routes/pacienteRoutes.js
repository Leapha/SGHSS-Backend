const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/pacienteController");
const auth = require("../middlewares/authMiddleware");

// protegendo as rotas
router.post("/", auth, pacienteController.criarPaciente);
router.get("/", auth, pacienteController.listarPacientes);
router.get("/:id", auth, pacienteController.buscarPaciente);
router.put("/:id", auth, pacienteController.atualizarPaciente);
router.delete("/:id", auth, pacienteController.deletarPaciente);

module.exports = router;