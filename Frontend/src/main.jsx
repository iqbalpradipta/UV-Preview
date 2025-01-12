import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrelineScript from './PrelineScript.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrelineScript />
    <App />
  </StrictMode>,
)
