import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Home.css";
const Home = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <p>teste</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
