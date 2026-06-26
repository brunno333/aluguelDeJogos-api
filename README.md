# 🎲 Aluguel de Jogos - API

Este é o repositório da **API (Backend)** para o sistema de gerenciamento e aluguel de **boardgames**. A aplicação foi construída em **Node.js** utilizando o framework **Express** e o banco de dados **MySQL**.

> **📚 Observação:** Este projeto foi desenvolvido com finalidade **didática**, como parte dos meus estudos e prática de desenvolvimento de software. Seu principal objetivo é aplicar conceitos, boas práticas, padrões de projeto e tecnologias utilizadas no desenvolvimento de aplicações reais.

---

## 📂 Estrutura do Projeto

```text
ALUGUELDEJOGOS-API/
├── backend/
│   ├── db.js          # Configuração e pool de conexão com o MySQL
│   └── index.js       # Ponto de entrada da API e definição das rotas
├── .gitignore         # Protege arquivos como node_modules e .env
├── package.json       # Dependências e scripts do projeto
├── package-lock.json  # Registro das versões das dependências
└── README.md          # Documentação do projeto
```

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript.
- **Express (v5.1.0)** — Framework para criação de APIs REST.
- **MySQL2** — Driver de conexão com MySQL com suporte a Promises.
- **Dotenv** — Gerenciamento de variáveis de ambiente.
- **CORS** — Permite a comunicação entre o Backend e o Frontend.

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/brunno333/aluguelDeJogos.git
cd ALUGUELDEJOGOS-API
```

---

### 2️⃣ Configurar as Variáveis de Ambiente

Crie um arquivo chamado `.env` na raiz do projeto e adicione as informações do seu banco de dados:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_seu_banco
```

---

### 3️⃣ Instalar as Dependências

Execute o comando abaixo na raiz do projeto:

```bash
npm install
```

---

### 4️⃣ Iniciar o Servidor

```bash
npm start
```

Se tudo estiver configurado corretamente, será exibida a mensagem:

```text
Servidor rodando em http://localhost:3000
```

---

## 🔌 Rotas Disponíveis

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| **GET** | `/jogos` | Retorna todos os boardgames cadastrados no banco de dados. |
| **PUT** | `/jogos/:id` | Atualiza o status de aluguel (`alugado: true/false`) de um jogo específico pelo ID. |

---

## 📌 Exemplo de Requisição

### Atualizar status de um jogo

**PUT** `/jogos/1`

```json
{
  "alugado": true
}
```

---

## 👨‍💻 Desenvolvedor

Desenvolvido por **Bruno Leonidio** 🚀
```
