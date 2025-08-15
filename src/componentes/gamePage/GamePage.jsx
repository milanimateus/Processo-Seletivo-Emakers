import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./GamePage.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const GamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const game = location.state;

  if (!game) {
    React.useEffect(() => {
      navigate("/");
    }, [navigate]);
    return null;
  }

  const handleAddToCart = () => {
    console.log(`${game.title} adicionado ao carrinho!`);
    alert(`${game.title} foi adicionado ao carrinho!`);
  };

  const handleBuyNow = () => {
    console.log(`Iniciando compra de ${game.title}`);
    navigate("/carrinho");
  };

  return (
    <div className="game-page-container">
      <Navbar />
      <main className="game-details-layout">
        <div className="game-image-column">
          <img src={game.image} alt={game.alt} className="game-main-image" />
          <div className="price-details-overlay">
            {game.desconto && (
              <div className="desconto-tag">{game.desconto}</div>
            )}
            <div className="price-tag">{game.price}</div>
          </div>
        </div>
        <div className="game-info-column">
          <h1 className="game-title">{game.title}</h1>
          <p className="game-description">{game.description}</p>

          <div className="action-buttons">
            <button className="buy-now-btn" onClick={handleAddToCart}>
              Adicionar ao carrinho
              <ShoppingCartIcon
                fontSize="small"
                style={{ marginLeft: "8px" }}
              />
            </button>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Socilitar Reembolso
              <ShoppingCartIcon
                fontSize="small"
                style={{ marginLeft: "8px" }}
              />
            </button>
          </div>
        </div>
      </main>
      <div className="carrinho-container-externo">
        <div className="carrinho-compra">
          <ShoppingCartOutlinedIcon fontSize="inherit" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GamePage;
