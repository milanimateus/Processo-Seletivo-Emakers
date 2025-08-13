import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import imagemForm from "../../images/imagemForm.png";
import "./AuthForm.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    const usuariosArmazenados = localStorage.getItem("users");
    if (!usuariosArmazenados) {
      setError("Nenhum usuário cadastrado.");
      return;
    }

    const usuarios = JSON.parse(usuariosArmazenados);
    const user = usuarios.find((u) => u.email === loginData.email);

    if (user && user.password === loginData.password) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      nav("/home");
    } else {
      setError("E-mail ou senha inválidos.");
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-panel">
        <form onSubmit={handleLogin} className="auth-form">
          <div className="auth-form__title">Login</div>
          <div className="auth-form__fields">
            <div className="auth-form__group">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={loginData.email}
                onChange={handleChange}
              />
            </div>
            <div className="auth-form__group">
              <input
                type="password"
                name="password"
                placeholder="Senha"
                value={loginData.password}
                onChange={handleChange}
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
          <button className="footer-link" onClick={() => nav("/password")}>
            Esqueceu a senha?
          </button>
        </div>
      </div>

      <div className="auth-page__aside">
        <img src={imagemForm} alt="Imagem Jogo" />
      </div>
    </div>
  );
};

export default Login;
