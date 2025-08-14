import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Destaques.css";
import GodOfWar from "../../images/popularesGOD.png";
import Horizon from "../../images/popularesHorizon.png";
import DaysGone from "../../images/popularesDaysGone.png";

const SlideItem = ({ data }) => {
  return (
    <div>
      <div className="slide-content">
        <div className="coluna-imagens-pequenas">
          {data.imagensPequenas.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="imagem-pequena"
            />
          ))}
        </div>
        <div className="coluna-imagem-grande">
          <img
            src={data.imagemGrande.src}
            alt={data.imagemGrande.alt}
            className="imagem-grande"
          />
        </div>
      </div>
    </div>
  );
};

const Destaques = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const destaquesData = [
    {
      id: 1,
      imagemGrande: {
        src: GodOfWar,
        alt: "Arte principal de God of War com Kratos e Atreus",
      },
      imagensPequenas: [
        { src: DaysGone, alt: "Protagonista de Days Gone ao lado de sua moto" },
        {
          src: Horizon,
          alt: "Aloy, de Horizon Zero Dawn, mirando com seu arco",
        },
      ],
    },
    {
      id: 2,
      imagemGrande: {
        src: Horizon,
        alt: "Aloy, de Horizon Zero Dawn, em uma paisagem com máquinas",
      },
      imagensPequenas: [
        { src: GodOfWar, alt: "Kratos, de God of War, em batalha" },
        { src: DaysGone, alt: "Cena de ação do jogo Days Gone" },
      ],
    },
    {
      id: 3,
      imagemGrande: {
        src: DaysGone,
        alt: "Protagonista de Days Gone em um cenário pós-apocalíptico",
      },
      imagensPequenas: [
        {
          src: Horizon,
          alt: "Uma das máquinas colossais de Horizon Zero Dawn",
        },
        { src: GodOfWar, alt: "Close-up no rosto de Kratos em God of War" },
      ],
    },
  ];

  return (
    <div className="container-destaques">
      <Slider {...settings}>
        {destaquesData.map((destaque) => (
          <SlideItem key={destaque.id} data={destaque} />
        ))}
      </Slider>
    </div>
  );
};

export default Destaques;
