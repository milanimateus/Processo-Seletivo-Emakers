import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Registro from "./componentes/forms/Registro.jsx";
import Login from "./componentes/forms/Login.jsx";
import Password from "./componentes/forms/Password.jsx";
import Home from "./componentes/home/Home.jsx";
import Conta from "./componentes/conta/Conta.jsx";
import Populares from "./componentes/populares/Populares.jsx";
import Admin from "./componentes/admin/Admin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/password" element={<Password />} />
        <Route path="/home" element={<Home />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/populares" element={<Populares />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
