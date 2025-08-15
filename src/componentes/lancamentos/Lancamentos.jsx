import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // Importe o Link
import { useCart } from "../context/CartContext.jsx";
import BobEsponja from "../../images/bobEsponja.png";
import Deliver from "../../images/deliver.png";
import SpellForce from "../../images/spellForce.png";
import Death from "../../images/death.png";
import Perish from "../../images/perish.png";
import GodOfWar from "../../images/godOfWar.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Lancamentos.css";

const Lancamentos = () => {
  const { addItemToCart } = useCart();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const lancamentos = [
    {
      id: 1,
      name: "SpongeBob SquarePants",
      img: BobEsponja,
      preco: "R$ 299,00",
    },
    { id: 2, name: "Deliver Us Mars", img: Deliver, preco: "R$ 159,00" },
    {
      id: 3,
      name: "SpellForce: Conquest of Eo",
      img: SpellForce,
      preco: "R$ 189,00",
    },
    { id: 4, name: "Death's Door", img: Death, preco: "R$ 99,00" },
    { id: 5, name: "Perish", img: Perish, preco: "R$ 79,00" },
    { id: 6, name: "God of War Ragnarök", img: GodOfWar, preco: "R$ 349,00" },
  ];

  const handleAddToCart = (jogo) => {
    addItemToCart(jogo);
  };

  return (
    <div className="container-lancamentos">
      <div className="titulo-lancamento">
        <h1>Lançamentos</h1>
      </div>
      <div className="slider-lancamentos">
        <Slider {...settings}>
          {lancamentos.map((d) => (
            <div
              className="card-container"
              key={d.id}
              onClick={() => handleAddToCart(d)}
            >
              <div className="imagens-lancamentos">
                <img src={d.img} alt={d.name} />
                <div className="preco-lancamentos">
                  <p>{d.preco}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="carrinho-compra-lancamentos">
        <Link to="/carrinho" className="carrinho-compra">
          <ShoppingCartOutlinedIcon fontSize="inherit" />
        </Link>
      </div>
    </div>
  );
};

export default Lancamentos;
