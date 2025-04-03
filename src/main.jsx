import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App1.jsx'
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App1/>
    <App2/>
  </StrictMode>,
)
