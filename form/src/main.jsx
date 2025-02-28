import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FormDetails } from './FormDetails'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FormDetails/>
  </StrictMode>,
)
