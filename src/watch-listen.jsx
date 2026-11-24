import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WatchListenPage from './WatchListenPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WatchListenPage />
  </StrictMode>,
)
