import React, { useState } from "react"; // 1. Importando o useState
import Navbar from "../navbar/Navbar";
import "./Admin.css";

const Admin = () => {
  // --- Estado para o formulário de ADICIONAR jogo ---
  const [addGameData, setAddGameData] = useState({
    title: "",
    genero: "",
    descricao: "",
    imagem: null,
  });

  // --- Estado para o formulário de REMOVER jogo ---
  const [removeGameId, setRemoveGameId] = useState("");

  // --- Estado para o formulário de EDITAR jogo ---
  // Idealmente, você primeiro buscaria um jogo e preencheria este estado
  const [editGameData, setEditGameData] = useState({
    id: "", // Você precisará de um ID para saber qual jogo editar
    title: "",
    genero: "",
    descricao: "",
    imagem: null,
  });

  // --- Funções Handler para cada formulário ---

  // Handler para o formulário de ADICIONAR
  const handleAddChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagem") {
      setAddGameData({ ...addGameData, [name]: files[0] }); // 2. Armazena o objeto do arquivo
    } else {
      setAddGameData({ ...addGameData, [name]: value });
    }
  };

  // Handler para o formulário de REMOVER
  const handleRemoveChange = (e) => {
    setRemoveGameId(e.target.value);
  };

  // Handler para o formulário de EDITAR
  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagem") {
      setEditGameData({ ...editGameData, [name]: files[0] });
    } else {
      setEditGameData({ ...editGameData, [name]: value });
    }
  };

  // --- Funções de Submissão (Submit) ---

  const handleAddSubmit = (e) => {
    e.preventDefault(); // 3. Impede o recarregamento da página
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
    // 4. Corrigindo o className
    <div className="admin-container">
      <Navbar />
      <main className="admin-main-content">
        {/* Formulário de Cadastro */}
        <div className="cadastro-jogo">
          <h1>Cadastrar Jogo</h1>
          {/* 5. Usando onSubmit */}
          <form onSubmit={handleAddSubmit} className="admin-form">
            <div className="titulo-admin">
              <input
                type="text"
                name="title"
                placeholder="Título do Jogo"
                value={addGameData.title} // 6. Usando o estado correto
                onChange={handleAddChange}
                required
              />
            </div>
            <div className="genero-admin">
              <input
                type="text"
                name="genero"
                placeholder="Gênero"
                value={addGameData.genero} // 6. Usando o estado correto
                onChange={handleAddChange}
                required
              />
            </div>
            <div className="descricao-admin">
              <textarea // Usar <textarea> é melhor para descrições longas
                name="descricao"
                placeholder="Descrição"
                value={addGameData.descricao} // 6. Usando o estado correto
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

        {/* Formulário de Remoção */}
        <div className="remover-jogo">
          <h1>Remover Jogo</h1>
          <form onSubmit={handleRemoveSubmit} className="admin-form">
            <div className="titulo-admin">
              <input
                type="text"
                placeholder="Título do Jogo ou ID"
                value={removeGameId} // 7. Conectando ao estado e handler corretos
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

        {/* Formulário de Edição */}
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
