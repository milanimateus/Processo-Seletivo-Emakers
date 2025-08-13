import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import imagemForm from "../../images/imagemForm.png";
import "./AuthForm.css";

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
    <div className="auth-page-container">
      <div className="auth-panel">
        <form onSubmit={handleRecover} className="auth-form">
          <div className="auth-form__title">
            <div className="title-stack">
              <span>Recuperar</span>
              <span className="indented-line">Conta</span>
            </div>
          </div>
          <div className="auth-form__fields">
            <div className="auth-form__group">
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
          <div className="auth-form__actions">
            <button type="submit" className="auth-form__submit">
              <EastIcon fontSize="inherit" />
            </button>
          </div>
        </form>

        <div className="auth-panel__footer">
          <button className="footer-link" onClick={() => nav("/registro")}>
            Criar Conta
          </button>
          <button className="footer-link" onClick={() => nav("/login")}>
            Fazer Login
          </button>
        </div>
      </div>
      <div className="auth-page__aside">
        <img src={imagemForm} alt="Imagem Jogo" />
      </div>
    </div>
  );
};

export default Password;
