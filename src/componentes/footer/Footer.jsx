import React from "react";
import imgNavbar from "../../images/navbar.png";
import { Link } from "react-router-dom"; // IMPORTAÇÃO CORRIGIDA
import "./Footer.css";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";

const Footer = () => {
  const footerItems = [
    { label: "Início", path: "/home" },
    { label: "Populares", path: "/populares" },
    { label: "Conta", path: "/cont  a" },
  ];

  return (
    <div>
      <footer>
        <div className="informacoes">
          <div className="game-Dame">
            <div className="logo">
              <img src={imgNavbar} alt="imagemNavbar" />
            </div>
            <div className="descricao-logo">
              <h2>Game Dame</h2>
              <p>Seu próximo jogo começa aqui</p>
            </div>
          </div>
          <div className="explorar">
            <h2>Explorar</h2>
            {footerItems.map((item) => (
              <div key={item.label} className="botao-footer">
                <Link to={item.path} className="botao-f">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="contato">
            <h2>Contato</h2>
            <p>
              <MailIcon fontSize="inherit" /> gamegamedame@teste.com
            </p>
            <p>
              <CallIcon fontSize="inherit" /> (99) 9 9999-9999
            </p>
            <p>
              <PlaceIcon fontSize="inherit" /> Shopping X, Lavras - MG
            </p>
          </div>
        </div>
        <div className="feito-por">
          <p>2024 Game Dame | By Emakers Júnior</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
