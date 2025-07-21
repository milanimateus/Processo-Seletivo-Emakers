import { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import imagemForm from '../../images/imagemForm.png'
import "./Registro.css"

const Registro = () => {
    const[userData, setUserData] = useState({
        username: "",
        email: "",
        cpf: "",
        password: "",
        confirmPassword: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados: " + userData.username + " - " + userData.password);
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

  return (
    <div className='container'>
        <div className='container-form'>
            <form onSubmit={handleSubmit} className="form-registro">
                <div className="title-registro">
                    Registrar
                </div>
                <div className="inputs">
                    <div className="input-block">
                        <input type="text" name = "username" placeholder='Nome de Usuário' value={userData.username} onChange={handleChange}/>
                    </div>
                    <div className="input-block">
                        <input type="email" name = "email" placeholder='E-mail' value={userData.email} onChange={handleChange}/>
                    </div>
                    <div className="input-block">
                        <input type="text" name = "cpf" placeholder='CPF' value={userData.cpf} onChange={handleChange}/>
                    </div>
                    <div className="input-block">
                        <input type="password" name="password" placeholder='Senha' value={userData.password} onChange={handleChange}/>
                    </div>
                    <div className="input-block">
                        <input type="password" name="confirmPassword" placeholder='Confirmar Senha' value={userData.confirmPassword} onChange={handleChange}/>
                    </div>
                </div>    
            </form>
            <div className="botao-registo">
                <button type='submit' className='seta'>
                    <ArrowForwardIcon/>
                </button>
            </div>
            <div className="botao-login">
                <button className='botao-login'>Fazer Login</button>
            </div>
        </div>
        <div className='imagem'>
            <img src={imagemForm} alt="Imagem Jogo" />
        </div>
    </div>
  )
}

export default Registro
