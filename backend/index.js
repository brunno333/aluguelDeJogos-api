const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/jogos', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM jogos');
  res.json(rows);
});

app.put('/jogos/:id', async (req, res) => {
  const { id } = req.params;
  const { alugado } = req.body;
  await db.query('UPDATE jogos SET alugado = ? WHERE id = ?', [alugado, id]);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
