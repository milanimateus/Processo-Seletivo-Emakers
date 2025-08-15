import React from "react";
import { useCart } from "../context/CartContext.jsx";
import Navbar from "../navbar/Navbar.jsx";

// Importando os ícones que vamos usar
import Pix from "../../images/pix.png";
import PaymentIcon from "@mui/icons-material/Payment";
import "./Carrinho.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Carrinho = () => {
  const { cartItems, removeItemFromCart } = useCart();

  const calcularTotal = () => {
    return cartItems.reduce((total, item) => {
      const precoNumerico = parseFloat(
        item.preco.replace("R$ ", "").replace(",", ".")
      );
      return total + precoNumerico;
    }, 0);
  };

  return (
    <div className="carrinho-container">
      <Navbar />
      <main className="carrinho-layout">
        <div className="carrinho-colum">
          <h1>Carrinho de compras</h1>
          <div className="itens-carrinho">
            {cartItems.map((item) => (
              <div className="item-carrinho" key={item.id}>
                <div className="item-detalhes">
                  <div className="item-info">
                    <h2>{item.name}</h2>
                    <h3>Plataforma: PC</h3>
                    <p>{item.preco}</p>
                  </div>
                  <button
                    onClick={() => removeItemFromCart(item.id)}
                    className="btn-remover"
                  >
                    Remover
                  </button>
                </div>
                <img src={item.img} alt={item.name} />
              </div>
            ))}
          </div>
          <div className="resumo-carrinho">
            <div className="total-preco">
              <span>Total:</span>
              <span>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(calcularTotal())}
              </span>
            </div>
          </div>
        </div>
        <div className="pagamento-layout">
          <h1>Método de Pagamento</h1>
          <div className="formas-pagamento">
            <div className="opcao-pagamento">
              <img src={Pix} alt="Ícone Pix" className="payment-image-icon" />
              Pix
              <input type="checkbox" id="pix" name="selecao"/>
            </div>
          </div>
          <div className="termos-condicoes">
            <input type="checkbox" id="termos" />
            <label htmlFor="termos">Eu aceito os termos e condições</label>
          </div>
          <button className="btn-finalizar">
            Finalizar compra <ShoppingCartIcon fontSize="inherit" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Carrinho;
