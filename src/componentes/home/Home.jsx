import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Home.css";
import Lancamentos from "../lancamentos/Lancamentos";
import Destaques from "../destaques/Destaques";

const Home = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Lancamentos/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
