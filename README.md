# Projeto prático para o desafio NLW Together

## Sobre o projeto
Desenvolver uma API Node.js para permitir que usuários façam elogios à seus colegas.

### A API deve ter os recursos:

- Cadastro de usuários
- Cadastro de tags (elogios possíveis)
  - disponível somente para usuários administradores

- **Cadastro de elogios**
  - ID do usuário que recebe elogio
  - ID do usuário que faz o elogio
  - data de criação do elogio

- **Autenticação de usuário**
  - Usar JWT
  - Validar usuário logado nas rotas necessárias

- **Listagem**
  - listar usuários
  - listar tags
  - listar elogios por usuários

## Instalação e execução
Para instalar a aplicação basta rodar o comando ```js yarn install``` ou ```js npm install```

Para executar a aplicação em modo de desenvolvimento basta rodar o comando ```js yarn dev``` ou ```js npm run dev```

## Variáveis de ambiente
Criar um arquivo na raiz do projeto com o nome ```.env``` e colocar as variáveis ```POST``` e ```JWT_SECRET```

Sendo que ```POST``` será a porta em que a aplicação irá rodar. Se não for informado nada será utilizado a porta ```3000```, o padrão.

A variável ```JWT_SECRET``` é o parâmetro ```secret``` do JWT.sign().


Site do projeto: [Next level Week - NLW](https://nextlevelweek.com/)

Tag: ```#nlwTogether```