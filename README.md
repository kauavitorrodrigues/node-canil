# node-canil

Este projeto é um backend para uma aplicação de um canil virtual. Ele fornece APIs para gerenciar informações sobre cães, incluindo cadastro, listagem e detalhes dos animais.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Mustache

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/node-canil.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd node-canil
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias:
    ```env
    PORT=3000
    ```

## Executando o Projeto


Para iniciar o servidor em modo de desenvolvimento, execute:
```sh
npm run dev
```
O servidor estará disponível em http://localhost:3000.

## Estrutura do Projeto
```sh
src/
    server.ts: Arquivo principal do servidor.
```