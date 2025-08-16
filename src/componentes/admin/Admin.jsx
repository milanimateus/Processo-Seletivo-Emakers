import React, { useState } from "react"; // 1. Importando o useState
import Navbar from "../navbar/Navbar";
import "./Admin.css";

const Admin = () => {
  const [addGameData, setAddGameData] = useState({
    title: "",
    genero: "",
    descricao: "",
    imagem: null,
  });

  const [removeGameId, setRemoveGameId] = useState("");

  const [editGameData, setEditGameData] = useState({
    id: "",
    title: "",
    genero: "",
    descricao: "",
    imagem: null,
  });

  const handleAddChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagem") {
      setAddGameData({ ...addGameData, [name]: files[0] });
    } else {
      setAddGameData({ ...addGameData, [name]: value });
    }
  };

  const handleRemoveChange = (e) => {
    setRemoveGameId(e.target.value);
  };

  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagem") {
      setEditGameData({ ...editGameData, [name]: files[0] });
    } else {
      setEditGameData({ ...editGameData, [name]: value });
    }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    console.log("Adicionando Jogo:", addGameData);
  };

  const handleRemoveSubmit = (e) => {
    e.preventDefault();
    console.log("Removendo Jogo com ID/Título:", removeGameId);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log("Editando Jogo:", editGameData);
  };

  return (
    <div className="admin-container">
      <Navbar />
      <main className="admin-main-content">
        <div className="cadastro-jogo">
          <h1>Cadastrar Jogo</h1>
          <form onSubmit={handleAddSubmit} className="admin-form">
            <div className="titulo-admin">
              <input
                type="text"
                name="title"
                placeholder="Título do Jogo"
                value={addGameData.title}
                onChange={handleAddChange}
                required
              />
            </div>
            <div className="genero-admin">
              <input
                type="text"
                name="genero"
                placeholder="Gênero"
                value={addGameData.genero}
                onChange={handleAddChange}
                required
              />
            </div>
            <div className="descricao-admin">
              <textarea
                name="descricao"
                placeholder="Descrição"
                value={addGameData.descricao}
                onChange={handleAddChange}
                required
              />
            </div>
            <div className="imagem-admin">
              <label htmlFor="add-image" className="file-upload-label">
                Inserir Imagem
              </label>
              <input
                id="add-image"
                type="file"
                name="imagem"
                accept="image/*"
                onChange={handleAddChange}
              />
            </div>
            <div className="cadastrar-admin">
              <button type="submit" className="botao-claro">
                Cadastrar
              </button>
            </div>
          </form>
        </div>

        <div className="remover-jogo">
          <h1>Remover Jogo</h1>
          <form onSubmit={handleRemoveSubmit} className="admin-form">
            <div className="titulo-admin">
              <input
                type="text"
                placeholder="Título do Jogo ou ID"
                value={removeGameId}
                onChange={handleRemoveChange}
                required
              />
            </div>
            <div className="remover-admin">
              <button type="submit" className="botao-escuro">
                Remover
              </button>
            </div>
          </form>
        </div>
        <div className="editar-jogo">
          <h1>Editar Jogo</h1>
          <form onSubmit={handleEditSubmit} className="admin-form">
            <div className="titulo-admin">
              <input
                type="text"
                name="title"
                placeholder="Título do Jogo"
                value={editGameData.title}
                onChange={handleEditChange}
              />
            </div>
            <div className="genero-admin">
              <input
                type="text"
                name="genero"
                placeholder="Gênero"
                value={editGameData.genero}
                onChange={handleEditChange}
              />
            </div>
            <div className="descricao-admin">
              <textarea
                name="descricao"
                placeholder="Descrição"
                value={editGameData.descricao}
                onChange={handleEditChange}
              />
            </div>
            <div className="imagem-admin">
              <label htmlFor="add-image" className="file-upload-label">
                Inserir Imagem
              </label>
              <input
                id="add-image"
                type="file"
                name="imagem"
                accept="image/*"
                onChange={handleAddChange}
              />
            </div>
            <div className="modificar-admin">
              <button type="submit" className="botao-claro">
                Modificar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Admin;
