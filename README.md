# Cadastro de Usuários

Este projeto é uma aplicação fullstack que permite o cadastro, login e listagem de usuários. Ele utiliza Express, Prisma, MongoDB, JWT para autenticação, além de um frontend em React e tailwind css para interação com os usuários e estilização.

## Tecnologias Utilizadas

### Backend:
- **Node.js**
- **Express.js**
- **Prisma ORM**
- **MongoDB**
- **JWT (JSON Web Tokens)** para autenticação
- **Bcrypt** para hashing de senhas

### Frontend:
- **React.js** com Hooks
- **React Router** para roteamento
- **Tailwind CSS** para estilização

## Funcionalidades

### Backend:
- **Cadastro de usuários** com hash de senhas.
- **Login de usuários** com geração de token JWT.
- **Listagem de usuários** (rota privada, protegida com JWT).
  
### Frontend:
- **Página de Cadastro**: Formulário para registro de novos usuários.
- **Página de Login**: Autenticação de usuários com geração de token.
- **Página de Listagem de Usuários**: Exibe a lista de usuários cadastrados (apenas para usuários autenticados).

## Como Executar o Projeto

### Pré-requisitos
- **Node.js** (v16+)
- **MongoDB** (ou MongoDB Atlas para banco na nuvem)
- **Prisma ORM** configurado para MongoDB
- Variáveis de ambiente configuradas (.env)

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/daianaadepaula/devclub-api-node-jwt.git
   cd devclub-api-node-jwt
   
2. Instale as dependências do backend e do frontend:
   ```bash
   npm install

   
3. Inicie o servidor:
   ```bash
   npm run dev


   
