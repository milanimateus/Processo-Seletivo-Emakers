import React from "react";
import Slider from "react-slick";

// É crucial importar os estilos CSS do react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Destaques.css"; // Nosso arquivo de estilos customizado

// Importando as imagens
import GodOfWar from "../../images/popularesGOD.png";
import Horizon from "../../images/popularesHorizon.png";
import DaysGone from "../../images/popularesDaysGone.png";

const Destaques = () => {
  // Configurações simplificadas para o slider
  const settings = {
    dots: true,       // Mostra os pontos de navegação
    infinite: true,   // Loop infinito
    speed: 500,       // Velocidade da transição em ms
    slidesToShow: 1,  // Mostrar 1 slide de cada vez
    slidesToScroll: 1,// Passar 1 slide de cada vez
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Array com os dados de cada slide
  const destaques = [
    {
      imagemPequena1: DaysGone,
      imagemPequena2: Horizon,
      imagemGrande: GodOfWar,
    },
    {
      imagemPequena1: GodOfWar,
      imagemPequena2: DaysGone,
      imagemGrande: Horizon,
    },
    {
      imagemPequena1: Horizon,
      imagemPequena2: GodOfWar,
      imagemGrande: DaysGone,
    },
  ];

  return (
    // Corrigido: o atributo deve ser 'className'
    <div className="container-destaques">
      <Slider {...settings}>
        {destaques.map((destaque, index) => (
          // Cada filho direto do Slider é um slide
          <div key={index}>
            <div className="slide-content">
              <div className="coluna-imagens-pequenas">
                <img src={destaque.imagemPequena1} alt="Destaque menor 1" className="imagem-pequena" />
                <img src={destaque.imagemPequena2} alt="Destaque menor 2" className="imagem-pequena" />
              </div>
              <div className="coluna-imagem-grande">
                <img src={destaque.imagemGrande} alt="Destaque principal" className="imagem-grande" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Destaques;