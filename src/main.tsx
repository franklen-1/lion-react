import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LionShop } from './LionShop'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LionShop />
  </StrictMode>,
)
