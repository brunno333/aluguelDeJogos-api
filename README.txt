PROJETO: Aluguel de Board Games

1. Configure o MySQL:
   - Crie o banco com este comando:
     CREATE DATABASE aluguel_jogos;
   - Depois:
     USE aluguel_jogos;

   - Crie a tabela:
     CREATE TABLE jogos (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(100) NOT NULL,
       alugado BOOLEAN DEFAULT FALSE
     );

   - Insira alguns jogos:
     INSERT INTO jogos (nome, alugado) VALUES
     ('Catan', FALSE), ('Ticket to Ride', FALSE),
     ('Dixit', FALSE), ('7 Wonders', FALSE);

2. No backend:
   - Altere db.js com seu usuário/senha MySQL
   - Rode:
     npm install
     npm start

3. Abra o frontend/index.html no navegador.

Dúvidas? Chame o ChatGPT!
