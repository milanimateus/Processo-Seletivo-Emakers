import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import imagemForm from "../../images/imagemForm.png";
import "./Registro.css";
import EastIcon from '@mui/icons-material/East'

const Registro = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  
  const nav = useNavigate();

  const validate = (data) => {
    const newErrors = {};
    if (!data.username) newErrors.username = "O nome de usuário é obrigatório.";

    if (!data.email) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "O formato do e-mail é inválido.";
    }
    if (!data.cpf) newErrors.cpf = "O CPF é obrigatório.";
    if (!data.password) {
      newErrors.password = "A senha é obrigatória.";
    } else if (data.password.length < 6) {
      newErrors.password = "A senha deve ter no mínimo 6 caracteres.";
    }
    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(userData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const existingUsersRaw = localStorage.getItem("users");
      const existingUsers = existingUsersRaw
        ? JSON.parse(existingUsersRaw)
        : [];

      const userExists = existingUsers.find(
        (user) => user.email === userData.email || user.cpf === userData.cpf
      );

      if (userExists) {
        alert("Erro: E-mail ou CPF já cadastrado.");
        return;
      }

      const { confirmPassword, ...newUser } = userData;
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      console.log("Usuário salvo no localStorage:", newUser);
      alert("Cadastro realizado com sucesso!");

      nav("/login");
    }
  };

  return (
    <div className="container">
      <div className="container-form">
        <form onSubmit={handleSubmit} className="form-registro">
          <div className="title-registro">Registrar</div>
          <div className="inputs">
            <div className="input-block">
              <input
                type="text"
                name="username"
                placeholder="Nome de Usuário"
                value={userData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="error-message">{errors.username}</p>
              )}
            </div>
            <div className="input-block">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={userData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="input-block">
              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                value={userData.cpf}
                onChange={handleChange}
              />
              {errors.cpf && <p className="error-message">{errors.cpf}</p>}
            </div>
            <div className="input-block">
              <input
                type="password"
                name="password"
                placeholder="Senha"
                value={userData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>
            <div className="input-block">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Senha"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error-message">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          <div className="botao-registo">
            <button type="submit" className="seta">
              <EastIcon/>
            </button>
          </div>
        </form>
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

export default Registro;
