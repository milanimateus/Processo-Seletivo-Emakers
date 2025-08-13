import React from "react";
import Slider from "react-slick";
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const lancamentos = [
    {
      name: "bobEsponja",
      img: BobEsponja,
      preco: "R$ 299,00",
    },
    {
      name: "deliver",
      img: Deliver,
      preco: "R$ 299,00",
    },
    {
      name: "spellForce",
      img: SpellForce,
      preco: "R$ 299,00",
    },
    {
      name: "death",
      img: Death,
      preco: "R$ 299,00",
    },
    {
      name: "perish",
      img: Perish,
      preco: "R$ 299,00",
    },
    {
      name: "godOfWar",
      img: GodOfWar,
      preco: "R$ 299,00",
    },
  ];

  return (
    <div className="container-lancamentos">
      <div className="title-lancamentos">
        <h1>Lançamentos</h1>
      </div>
      <div className="slider-lancamentos">
        <Slider {...settings}>
          {lancamentos.map((d, index) => (
            <div className="card-container" key={index}>
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
      <div className="carrinho-compra">
        <ShoppingCartOutlinedIcon fontSize="inherit" />
      </div>
    </div>
  );
};

export default Lancamentos;
