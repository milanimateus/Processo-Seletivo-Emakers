import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate
import Navbar from "../navbar/Navbar";
import "./Conta.css";
import BobEsponja from "../../images/BobEsponja.png";
import Deliver from "../../images/Deliver.png";
import Death from "../../images/Death.png";
import GodOfWar from "../../images/GodOfWar.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Conta = () => {
  // Estado para armazenar os dados do usuário que está na sessão
  const [usuarioAtual, setUsuarioAtual] = useState(null);

  const nav = useNavigate();

  // useEffect é usado para executar uma ação assim que o componente é montado.
  // É o lugar perfeito para carregar os dados do usuário.
  useEffect(() => {
    // No seu código de Login, você salvou o usuário no sessionStorage.
    const usuarioLogadoString = sessionStorage.getItem("loggedInUser");

    if (usuarioLogadoString) {
      // Se encontrou o usuário na sessão, converte de string para objeto...
      const usuarioLogadoObjeto = JSON.parse(usuarioLogadoString);
      // ...e atualiza o estado do componente com esses dados.
      setUsuarioAtual(usuarioLogadoObjeto);
    } else {
      // Se não houver ninguém logado, redireciona para a página de login.
      alert("Nenhum usuário logado. Redirecionando para o login.");
      nav("/login");
    }
  }, [nav]); // O array [nav] indica que este efeito só precisa rodar uma vez.

  // Função para lidar com a exclusão da conta
  const handleExcluirConta = () => {
    // Pede uma confirmação antes de uma ação destrutiva
    const confirmou = window.confirm(
      "Você tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita."
    );

    if (confirmou && usuarioAtual) {
      // 1. Pega a lista de todos os usuários do localStorage
      const usuariosArmazenados = localStorage.getItem("users");
      let usuarios = usuariosArmazenados ? JSON.parse(usuariosArmazenados) : [];

      // 2. Filtra a lista, mantendo todos os usuários EXCETO o atual
      const usuariosAtualizados = usuarios.filter(
        (user) => user.email !== usuarioAtual.email
      );

      // 3. Salva a nova lista (sem o usuário excluído) de volta no localStorage
      localStorage.setItem("users", JSON.stringify(usuariosAtualizados));

      // 4. Limpa a sessão atual (logout)
      sessionStorage.removeItem("loggedInUser");

      // 5. Avisa o usuário e o redireciona para o login
      alert("Conta excluída com sucesso!");
      nav("/login");
    }
  };

  if (!usuarioAtual) {
    return null; // ou <p>Carregando...</p>
  }
  // Se o usuário já foi carregado, exibe a página completa.
  return (
    <div>
      <Navbar />
      <div className="container-conta">
        <div className="info-conta">
          <div className="dados-conta">
            {/* Exibe os dados do estado 'usuarioAtual' */}
            <h1>Olá, {usuarioAtual.username}!</h1>
            <h2>Seu e-mail é {usuarioAtual.email}</h2>
            <h2>Seu CPF é {usuarioAtual.cpf}</h2>
          </div>
          <div className="botao-conta">
            {/* Este botão irá navegar para uma página de edição (que você precisará criar) */}
            <button onClick={() => nav("/editar-conta")}>
              Alterar dados <EditIcon fontSize="inherit" />
            </button>
          </div>
          <div className="botao-conta">
            <button onClick={handleExcluirConta}>
              Excluir conta
              <DeleteForeverIcon fontSize="inherit" />
            </button>
          </div>

          <div className="botao-conta botao-conta--admin">
            <button onClick={() => nav("/admin")}>Tela do admin</button>
          </div>
        </div>
        <div className="jogos-adquiridos">
          <h2>Jogos Adquiridos:</h2>
          <div className="jogos">
            <div className="imagem-jogo">
              <img src={BobEsponja} alt="Bob Esponja" />
              <p>100/100</p>
            </div>
            <div className="imagem-jogo">
              <img src={Deliver} alt="Deliver" />
              <p>95/100</p>
            </div>
            <div className="imagem-jogo">
              <img src={Death} alt="Death" />
              <p>75/100</p>
            </div>
            <div className="imagem-jogo">
              <img src={GodOfWar} alt="GodOfWar" />
              <p>Adicionar Avaliação</p>
            </div>
          </div>
          <div className="carrinho-compra">
            <ShoppingCartOutlinedIcon fontSize="inherit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conta;
