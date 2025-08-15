import React from "react";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import imgNavbar from "../../images/navbar.png";
import "./Footer.css";

const navItens = [
  { label: "Início", path: "/home" },
  { label: "Populares", path: "/populares" },
  { label: "Conta", path: "/conta" }, 
];

const informacoesContato = {
  email: "gamegamedame@teste.com",
  phoneDisplay: "(99) 9 9999-9999",
  phoneLink: "+5599999999999",
  address: "Shopping X, Lavras - MG",
};

const copyrightText = "2024 Game Dame | By Emakers Júnior";

const Footer = () => {
  return (
    <footer>
      <div className="informacoes">
        <div className="game-dame">
          <div className="logo-footer">
            <img src={imgNavbar} alt="Logo da Game Dame" />
          </div>
          <div className="descricao-logo">
            <h2>Game Dame</h2>
            <p>Seu próximo jogo começa aqui</p>
          </div>
        </div>

        <div className="explorar">
          <h2>Explorar</h2>
          {navItens.map((item) => (
            <div key={item.path} className="botao-footer">
              <Link to={item.path} className="botao-f">
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="contato">
          <h2>Contato</h2>
          <p>
            <MailIcon fontSize="inherit" />
            <a href={`mailto:${informacoesContato.email}`}>
              {" "}
              {informacoesContato.email}
            </a>
          </p>
          <p>
            <CallIcon fontSize="inherit" />
            <a href={`tel:${informacoesContato.phoneLink}`}>
              {" "}
              {informacoesContato.phoneDisplay}
            </a>
          </p>
          <p>
            <PlaceIcon fontSize="inherit" /> {informacoesContato.address}
          </p>
        </div>
      </div>

      <div className="feito-por">
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
