import React from "react";
import imgNavbar from "../../images/navbar.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const navItems = [
    { label: "Lançamentos", path: "/lancamentos" },
    { label: "Populares", path: "/populares" },
    { label: "Gêneros", path: "/generos" },
    { label: "Promoções", path: "/promocoes" },
    { label: "Conta", path: "/conta" },
  ];

  return (
    <div className="navbar">
      <div className="logo">
        <img src={imgNavbar} alt="imagemNavbar" />
      </div>

      {navItems.map((item) => (
        <div key={item.label} className="botao-navbar">
          <Link to={item.path} className="botao">
            {item.label}
          </Link>
        </div>
      ))}

      <div className="barra-pesquisa">
        <input type="text" />
        <button className="icone-lupa">
          <SearchIcon fontSize="inherit" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
