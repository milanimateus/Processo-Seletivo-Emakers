import React from "react";
import "./Populares.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import GodOfWar from "../../images/popularesGOD.png";
import Horizon from "../../images/popularesHorizon.png";
import DaysGone from "../../images/popularesDaysGone.png";

const Populares = () => {
  return (
    <div className="populares-container">
      <Navbar />
      <main className="main-content">
        <h1>Populares</h1>

        {/* --- Jogo 1 --- */}
        <div className="descricao-jogo">
          <div className="imagem-populares">
            <div className="classificacao-jogo">
              1°
            </div>
            <img src={GodOfWar} alt="God Of War" />
          </div>
          <div className="texto-populares">
            <h2>God of War</h2>
            <p>
              Kratos é pai novamente. Como mentor e protetor de Atreus, um filho
              determinado a ganhar seu respeito, ele é forçado a encarar e
              controlar a fúria que há muito tempo o define enquanto viaja por
              um mundo ameaçador com o seu filho. Com a vingança contra os
              deuses do Olimpo no passado, Kratos agora vive no reino das
              divindades e monstros nórdicos. É nesse mundo duro e impiedoso que
              ele deve lutar para sobreviver enquanto ensina seu filho a fazer o
              mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de
              Esparta.
            </p>
          </div>
        </div>

        {/* --- Jogo 2 --- */}
        <div className="descricao-jogo">
          <div className="texto-populares">
            <h2>Horizon Zero Dawn</h2>
            <p>
              Em um futuro distante, dominado por máquinas colossais que vagam
              pela Terra, a natureza retomou as ruínas da nossa civilização
              esquecida e pequenos grupos de sobreviventes se dividem em
              diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem
              caçadora de máquinas exilada da sua tribo, que parte em busca da
              verdade sobre suas origens e o misterioso mundo que ela precisa
              salvar.
            </p>
          </div>
          <div className="imagem-populares">
            <div className="classificacao-jogo">
              2°
            </div>
            <img src={Horizon} alt="Horizon" />
          </div>
        </div>

        {/* --- Jogo 3 --- */}
        <div className="descricao-jogo">
          <div className="imagem-populares">
            <div className="classificacao-jogo">
              3°
            </div>
            <img src={DaysGone} alt="DaysGone" />
          </div>
          <div className="texto-populares">
            <h2>Days Gone</h2>
            <p>
              Days Gone é um jogo de ação e aventura em mundo aberto que se
              passa em um ambiente adverso dois anos após uma pandemia mundial
              devastadora.Entre na pele do antigo motociclista fora da lei
              Deacon St. John, um caçador de recompensas que tenta achar uma
              razão para viver numa terra cercada pela morte. Vasculhe
              assentamentos abandonados em busca de equipamentos para produzir
              itens e armas valiosos ou arrisque-se com outros sobreviventes que
              tentam ganhar a vida honestamente... ou de formas mais violentas.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Populares;
