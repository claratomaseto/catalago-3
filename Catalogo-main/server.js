const express = require('express');
const app = express();
const mysql = require('mysql2');

app.use(express.json());

// Configuração para permitir requisições do front-end (CORS)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Pasta onde estão os arquivos HTML, CSS e JS do front-end
app.use(express.static('site'));

// Configuração da conexão com o MySQL (Banco: dc)
const db = mysql.createConnection({
    user: 'root',
    password: 'ifsp',
    database: 'dc'
});

db.connect((erro) => {
    if (erro) {
        console.error('❌ Erro ao conectar no MySQL:', erro);
    } else {
        console.log('✅ Conectado ao banco dc com sucesso!');
    }
});


// ================= ROTAS GET (BUSCAR DADOS) =================

app.get('/api/lista', (req, res) => {
    db.query("SELECT * FROM lista", (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
});

app.get('/api/equipes', (req, res) => {
    db.query("SELECT * FROM equipes", (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
});

app.get('/api/localizacoes', (req, res) => {
    db.query("SELECT * FROM localizacoes", (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
});

app.get('/api/habilidades', (req, res) => {
    db.query("SELECT * FROM habilidades", (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
});

app.get('/api/quadrinhos', (req, res) => {
    db.query("SELECT * FROM quadrinhos", (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
});


// ================= ROTAS POST (SALVAR DADOS COM SQL) =================

app.post('/api/lista', (req, res) => {
    const { nome, codinome, tipo, status, localizacao, imagem } = req.body;
    const sql = `INSERT INTO lista (nome, codinome, tipo, status, localizacao, imagem) VALUES (?, ?, ?, ?, ?, ?)`;
    const valores = [nome, codinome, tipo, status, localizacao, imagem];

    db.query(sql, valores, function(err, results) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json({ status: "sucesso", id: results.insertId });
    });
});

app.post('/api/equipes', (req, res) => {
    const { nome } = req.body;
    const sql = `INSERT INTO equipes (nome) VALUES (?)`;
    
    db.query(sql, [nome], function(err, results) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json({ status: "sucesso", id: results.insertId });
    });
});

app.post('/api/localizacoes', (req, res) => {
    const { nome } = req.body;
    const sql = `INSERT INTO localizacoes (nome) VALUES (?)`;
    
    db.query(sql, [nome], function(err, results) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json({ status: "sucesso", id: results.insertId });
    });
});

app.post('/api/habilidades', (req, res) => {
    const { nome } = req.body;
    const sql = `INSERT INTO habilidades (nome) VALUES (?)`;
    
    db.query(sql, [nome], function(err, results) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json({ status: "sucesso", id: results.insertId });
    });
});

app.post('/api/quadrinhos', (req, res) => {
    const { titulo } = req.body;
    const sql = `INSERT INTO quadrinhos (titulo) VALUES (?)`;
    
    db.query(sql, [titulo], function(err, results) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json({ status: "sucesso", id: results.insertId });
    });
});


// --- INICIA O SERVIDOR ---
app.listen(3000, () => {
    console.log("Servidor escutando em http://localhost:3000");
});