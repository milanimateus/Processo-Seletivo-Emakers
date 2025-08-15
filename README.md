# 🎮 Site de Jogos - Processo Seletivo Emakers

Este projeto é um **site de vendas e exibição de jogos** desenvolvido em **React** com foco em uma experiência de navegação fluida e moderna. Ele permite que o usuário explore lançamentos, destaques, jogos populares, acesse informações detalhadas sobre cada título, gerencie um carrinho de compras e faça login ou registro.

---

## 📌 Funcionalidades Principais

- **Página Inicial** com destaques e lançamentos em carrosséis interativos.
- **Página de Detalhes do Jogo** com descrição e botão para adicionar ao carrinho.
- **Carrinho de Compras** com listagem dos jogos selecionados.
- **Sistema de Autenticação** (login, registro e recuperação de senha).
- **Área do Usuário (Conta)** para visualizar informações.
- **Painel Administrativo** para gestão de produtos/jogos.
- **Navegação Responsiva** com barra de menu adaptável.
- **Carrosséis dinâmicos** para lançamentos, populares e destaques.

---

## 🗂 Estrutura de Pastas
```
src/
│ App.jsx # Configuração das rotas principais
│ main.jsx # Ponto de entrada do React
│
├─componentes/
│ ├─admin/ # Página e estilos do painel administrativo
│ ├─carrinho/ # Componente e estilos do carrinho de compras
│ ├─conta/ # Página e estilos da área do usuário
│ ├─context/ # Contexto global para gerenciamento do carrinho
│ ├─destaques/ # Carrossel e listagem de jogos em destaque
│ ├─footer/ # Rodapé do site
│ ├─forms/ # Login, registro e recuperação de senha
│ ├─gamePage/ # Página de detalhes de um jogo específico
│ ├─home/ # Página inicial
│ ├─lancamentos/ # Carrossel e listagem de lançamentos
│ ├─navbar/ # Barra de navegação
│ ├─populares/ # Carrossel de jogos populares
│
├─images/ # Imagens usadas no site
```
---

## 🔄 Navegação e Fluxo

1. **App.jsx** define as rotas principais usando **React Router DOM**:
   - `/` → **Home**
   - `/game/:id` → **GamePage**
   - `/carrinho` → **Carrinho**
   - `/conta` → **Conta**
   - `/admin` → **Admin**
   - `/login`, `/registro`, `/password` → Formulários de autenticação
2. O **Navbar** está presente em todas as páginas, permitindo navegação rápida.
3. O **CartContext** gerencia o estado global do carrinho.
4. Os componentes de **carrossel** usam **react-slick** e **slick-carousel**.

---

## 🛠 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção da interface
- **React Router DOM 7** - Roteamento de páginas
- **Material UI** - Componentes e ícones estilizados
- **React Slick** + **Slick Carousel** - Carrosséis de jogos
- **Vite** - Build e servidor de desenvolvimento
- **Context API** - Gerenciamento de estado global (carrinho)
- **CSS Modules** - Estilização modular

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (>= 18)
- npm (>= 9) ou yarn

### Passos

```bash
# 1. Clonar o repositório
git clone https://github.com/usuario/repositorio.git

# 2. Acessar a pasta
cd Processo-Seletivo-Emakers-master

# 3. Instalar dependências
npm install

# 4. Rodar em ambiente de desenvolvimento
npm run dev

# 5. Acessar no navegador
http://localhost:5173
```
