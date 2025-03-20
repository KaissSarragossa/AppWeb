import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import VariableState from './VariableState.jsx'
import Count from './Count.jsx'
import Tableau from './Tableau.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App/>*/}
    {/* <VariableState/> */}
    <Count/>
    {/* <Tableau/> */}
  </StrictMode>,
)
