import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import imagemForm from "../../images/imagemForm.png";
import "./Password.css";

const Password = () => {
  const [emailData, setEmailData] = useState({ email: "" });
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleRecover = (event) => {
    event.preventDefault();
    setError("");

    alert(
      "Se este e-mail estiver em nossa base de dados, um link de recuperação será enviado."
    );

    const usuariosArmazenados = localStorage.getItem("users");
    if (usuariosArmazenados) {
      const usuarios = JSON.parse(usuariosArmazenados);
      const user = usuarios.find((u) => u.email === emailData.email);

      if (user) {
        console.log("E-mail encontrado, enviando link para:", user.email);
      } else {
        console.log("E-mail não encontrado na base de dados.");
      }
    }

    nav("/login");
  };

  return (
    <div className="container">
      <div className="container-form">
        <form onSubmit={handleRecover} className="form-login">
          <div className="title-recover">Recuperar <br />Conta</div>
          <div className="inputs">
            <div className="input-block">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={emailData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="botao-recover">
            <button type="submit" className="seta">
              <ArrowForwardIcon />
            </button>
          </div>
        </form>
        <div className="botao-registro">
          <button className="botao-registro" onClick={() => nav("/registro")}>
            Criar Conta
          </button>
        </div>
        <div className="botao-login">
          <button className="botao-login" onClick={() => nav("/login")}>
            Fazer Login
          </button>
        </div>
      </div>
      <div className="imagem">
        <img src={imagemForm} alt="Imagem Jogo" />
      </div>
    </div>
  );
};

export default Password;
