import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Registro from './componentes/registro/Registro.jsx'
import Login from "./componentes/login/Login.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Registro/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
