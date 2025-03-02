import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './service/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AppContextProvider>
  </StrictMode>,
)
