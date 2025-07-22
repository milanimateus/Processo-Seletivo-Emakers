import { StrictMode } from 'react'
import REACTDOM from "react-dom/client"
import App from './App.jsx'

REACTDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
