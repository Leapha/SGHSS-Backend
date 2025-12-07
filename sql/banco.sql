CREATE DATABASE sghss;

\ c sghss 

CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    cpf VARCHAR(14),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);