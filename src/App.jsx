import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Registro from "./componentes/registro/Registro.jsx";
import Login from "./componentes/login/Login.jsx";
import Password from "./componentes/password/Password.jsx";
import Home from "./componentes/home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/password" element={<Password />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
