import React, { useState } from "react"; 
import "./Login.css";
import { useNavigate } from "react-router-dom";
import EastIcon from '@mui/icons-material/East'
import imagemForm from "../../images/imagemForm.png"; 

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
      // Salva o usuário na sessão para uso em outras partes da aplicação
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));

      nav("/home");
    } else {
      setError("E-mail ou senha inválidos.");
    }
  };

  return (
    <div className="container">
      <div className="container-form">
        <form onSubmit={handleLogin} className="form-login">
          <div className="title-login">Login</div>
          <div className="inputs">
            <div className="input-block">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={loginData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-block">
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

          <div className="botao">
            <button type="submit" className="seta">
              <EastIcon/>
            </button>
          </div>
        </form>
        <div className="botao-registro">
          <button className="botao-registro" onClick={() => nav("/registro")}>
            Criar Conta
          </button>
        </div>
        <div className="botao-senha">
          <button className="botao-senha" onClick={() => nav("/password")}>
            Esqueceu a senha?
          </button>
        </div>
      </div>
      <div className="imagem">
        <img src={imagemForm} alt="Imagem Jogo" />
      </div>
    </div>
  );
};

export default Login;
