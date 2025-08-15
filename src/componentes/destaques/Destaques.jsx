import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Importar useNavigate
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Destaques.css";
import GodOfWarImg from "../../images/popularesGOD.png";
import HorizonImg from "../../images/popularesHorizon.png";
import DaysGoneImg from "../../images/popularesDaysGone.png";

// 2. Criar uma base de dados completa para os jogos
// Assim, cada imagem terá todos os dados associados a ela.
const gamesData = {
  GOD_OF_WAR: {
    id: "godofwar",
    title: "God of War",
    description: "Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos. É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.",
    image: GodOfWarImg,
    alt: "Arte de God of War com Kratos e Atreus",
    price: "R$ 119,95",
    desconto: "-40%"
  },
  HORIZON: {
    id: "horizon",
    title: "Horizon Zero Dawn",
    description: "Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.  ",
    image: HorizonImg,
    alt: "Aloy, de Horizon Zero Dawn, mirando com seu arco",
    price: "R$ 149,99",
    desconto: "-25%"
  },
  DAYS_GONE: {
    id: "daysgone",
    title: "Days Gone",
    description: "Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos após uma pandemia mundial devastadora.Entre na pele do antigo motociclista fora da lei Deacon St. John, um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas.",
    image: DaysGoneImg,
    alt: "Protagonista de Days Gone ao lado de sua moto",
    price: "R$ 169,90",
    desconto: "-15%"
  },
};

// Componente do Slide que agora recebe uma função para o clique
const SlideItem = ({ data, onImageClick }) => {
  return (
    <div>
      <div className="slide-content">
        <div className="coluna-imagens-pequenas">
          {data.imagensPequenas.map((game, index) => (
            <img
              key={index}
              src={game.image}
              alt={game.alt}
              className="imagem-pequena"
              // 5. Adicionar o evento onClick, passando os dados completos do jogo
              onClick={() => onImageClick(game)}
              style={{ cursor: "pointer" }} // Adiciona um cursor de ponteiro para indicar que é clicável
            />
          ))}
        </div>
        <div className="coluna-imagem-grande">
          <img
            src={data.imagemGrande.image}
            alt={data.imagemGrande.alt}
            className="imagem-grande"
            // 5. Adicionar o evento onClick também na imagem grande
            onClick={() => onImageClick(data.imagemGrande)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

const Destaques = () => {
  const navigate = useNavigate(); // 3. Inicializar o hook

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  
  // 2.1. Estrutura de dados para os slides, agora referenciando os objetos completos dos jogos
  const destaquesData = [
    {
      id: 1,
      imagemGrande: gamesData.GOD_OF_WAR,
      imagensPequenas: [gamesData.DAYS_GONE, gamesData.HORIZON],
    },
    {
      id: 2,
      imagemGrande: gamesData.HORIZON,
      imagensPequenas: [gamesData.GOD_OF_WAR, gamesData.DAYS_GONE],
    },
    {
      id: 3,
      imagemGrande: gamesData.DAYS_GONE,
      imagensPequenas: [gamesData.HORIZON, gamesData.GOD_OF_WAR],
    },
  ];

  // 3.1. Função que será chamada no clique, usando a mesma lógica do seu CarouselMain
  const handleGameClick = (game) => {
    console.log("Navegando para a página do jogo:", game); // Ótimo para debugar
    navigate("/gamepage", { state: game });
  };

  return (
    <div className="container-destaques">
      <Slider {...settings}>
        {destaquesData.map((destaque) => (
          <SlideItem
            key={destaque.id}
            data={destaque}
            // 4. Passar a função de clique como prop para o SlideItem
            onImageClick={handleGameClick}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Destaques;