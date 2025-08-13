import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
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
  const [usuarioAtual, setUsuarioAtual] = useState(null);

  const nav = useNavigate();

  useEffect(() => {
    const usuarioLogadoString = sessionStorage.getItem("loggedInUser");

    if (usuarioLogadoString) {
      const usuarioLogadoObjeto = JSON.parse(usuarioLogadoString);
      setUsuarioAtual(usuarioLogadoObjeto);
    } else {
      alert("Nenhum usuário logado. Redirecionando para o login.");
      nav("/login");
    }
  }, [nav]);

  const handleExcluirConta = () => {
    const confirmou = window.confirm(
      "Você tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita."
    );

    if (confirmou && usuarioAtual) {
      const usuariosArmazenados = localStorage.getItem("users");
      let usuarios = usuariosArmazenados ? JSON.parse(usuariosArmazenados) : [];

      const usuariosAtualizados = usuarios.filter(
        (user) => user.email !== usuarioAtual.email
      );

      localStorage.setItem("users", JSON.stringify(usuariosAtualizados));

      sessionStorage.removeItem("loggedInUser");

      alert("Conta excluída com sucesso!");
      nav("/login");
    }
  };

  if (!usuarioAtual) {
    return null;
  }

  return (
    <div className="page-conta-wrapper">
      <Navbar />
      <div className="container-conta">
        <div className="info-conta">
          <div className="dados-conta">
            <h1>Olá, {usuarioAtual.username}!</h1>
            <h2>Seu e-mail é {usuarioAtual.email}</h2>
            <h2>Seu CPF é {usuarioAtual.cpf}</h2>
          </div>
          <div className="botao-conta">
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
