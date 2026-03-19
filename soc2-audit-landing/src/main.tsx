import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LandingLayout } from './components/templates/LandingLayout'
import { LandingPage } from './pages/LandingPage'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingLayout>
      <LandingPage />
    </LandingLayout>
  </StrictMode>,
)
