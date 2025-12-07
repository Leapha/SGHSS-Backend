const pool = require('../../config/database');

// ===========================
// CADASTRAR PACIENTE
// ===========================
exports.criarPaciente = async (req, res) => {
    const { nome, cpf, data_nascimento, telefone, endereco } = req.body;

    try {
        const [resultado] = await pool.query(
            `INSERT INTO pacientes
            (nome, cpf, data_nascimento, telefone, endereco, criado_em)
            VALUES (?, ?, ?, ?, ?, NOW())`,
            [nome, cpf, data_nascimento, telefone, endereco]
        );

        res.status(201).json({
            mensagem: "Paciente cadastrado com sucesso",
            id: resultado.insertId
        });

    } catch (error) {
        console.error("❌ Erro ao cadastrar paciente:", error.message);
        res.status(500).json({ erro: "Erro ao cadastrar paciente" });
    }
};


// ===========================
// LISTAR PACIENTES
// ===========================
exports.listarPacientes = async (req, res) => {
    try {
        const [pacientes] = await pool.query("SELECT * FROM pacientes");
        res.json(pacientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao listar pacientes' });
    }
};



// ===========================
// BUSCAR PACIENTE POR ID
// ===========================
exports.buscarPaciente = async (req, res) => {
    const { id } = req.params;

    try {
        const [paciente] = await pool.query(
            "SELECT * FROM pacientes WHERE id = ?",
            [id]
        );

        res.json(paciente[0]);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar paciente' });
    }
};


// ===========================
// ATUALIZAR PACIENTE
// ===========================
exports.atualizarPaciente = async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, data_nascimento, telefone, endereco } = req.body;

    try {
        await pool.query(
            `UPDATE pacientes SET 
            nome=?, 
            cpf=?, 
            data_nascimento=?, 
            telefone=?, 
            endereco=?
            WHERE id=?`,
            [nome, cpf, data_nascimento, telefone, endereco, id]
        );

        res.json({ mensagem: 'Paciente atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar paciente' });
    }
};


// ===========================
// DELETAR PACIENTE
// ===========================
exports.deletarPaciente = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query("DELETE FROM pacientes WHERE id = ?", [id]);
        res.json({ mensagem: 'Paciente removido com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao remover paciente' });
    }
};

