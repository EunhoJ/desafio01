# 🧩 Desafio Full Stack - React + NestJS

Este projeto é um **monorepo** que integra um **frontend em React** com **backend em NestJS**, com o objetivo de demonstrar uma arquitetura moderna de aplicação **Full Stack**.  
A aplicação permite realizar operações CRUD (criar, listar, editar e excluir dados), servindo como base para desafios técnicos.

## 📁 Estrutura do Projeto

DESAFIO01/   
┣ 📂 backend → API desenvolvido com NestJS   
┣ 📂 frontend → Interface desenvolvida com React + Vite +     TypeScript      
┗ 📄 README.md


## 🚀 Tecnologias Utilizadas

### 🧱 Backend (NestJS)

- **NestJS v11**
- **Swagger** para documentação da API
- **Axios** para requisições HTTP externas
- **Class Validator / Transformer** para validação de DTOs
- **Jest** para testes automatizados
- **ESLint + Prettier** para padronização de código

### 💻 Frontend (React)

- **React v19 + TypeScript**
- **Vite** como bundler
- **TailwindCSS** para estilização
- **Redux + Redux Saga** para gerenciamento de estado e efeitos assíncronos
- **Axios** para comunicação com o backend
- **ESLint + TypeScript ESLint** para linting

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

🟩 Node.js
 (versão 20 ou superior)
Necessário para executar o backend (NestJS) e o frontend (Vite + React).

💻 Git Bash
 ou Bash
Recomendado para executar comandos de terminal de forma consistente entre sistemas (Windows/Linux/macOS).

🧰 Visual Studio Code

IDE recomendada para desenvolvimento com suporte a extensões como:

ESLint

Prettier

Tailwind CSS IntelliSense

NestJS Files (para melhor suporte ao backend)



## 🧩 Instalação

Clone o repositório e instale as dependências de ambos os projetos:

```
# Clone o projeto
git clone https://github.com/EunhoJ/desafio01.git
cd desafio01

Backend
cd backend
npm install
npm run start:dev

O servidor será iniciado em:

http://localhost:3000

📘 Documentação Swagger:

http://localhost:3000/api

---

Frontend
cd ../frontend
npm install
npm run dev

A aplicação estará disponível em:

http://localhost:5173

🗂️ Scripts Principais
Backend
Comando	Descrição
npm run start:dev	-- Inicia o servidor com reload automático
npm run build	    -- Compila o projeto para produção
npm run test	    -- Executa os testes unitários
npm run lint	    -- Verifica e corrige problemas de lint

Frontend
Comando	Descrição
npm run dev	        -- Inicia o servidor de desenvolvimento
npm run build	    -- Gera os arquivos otimizados para produção
npm run preview	    -- Visualiza o build de produção
npm run lint	    -- Analisa o código e exibe erros de lint

```


## 📄 Licença

Este projeto é de uso livre para fins de estudo e demonstração técnica.


Desenvolvido por John Vieira 💻