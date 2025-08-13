import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import imgNavbar from "../../images/navbar.png";
import "./Navbar.css";

const navItens = [
  { label: "Lançamentos", path: "/lancamentos" },
  { label: "Populares", path: "/populares" },
  { label: "Gêneros", path: "/generos" },
  { label: "Promoções", path: "/promocoes" },
  { label: "Conta", path: "/conta" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar__logo" onClick={closeMobileMenu}>
        <img src={imgNavbar} alt="Game Dame Logo" />
      </Link>

      <div
        className="navbar__toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <ul className={isMenuOpen ? "navbar__nav active" : "navbar__nav"}>
        {navItens.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="navbar__nav-link"
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <form className="navbar__search">
        <input
          type="text"
          className="navbar__search-input"
        />
        <button
          type="submit"
          className="navbar__search-button"
          aria-label="Pesquisar"
        >
          <SearchIcon fontSize="inherit" />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
