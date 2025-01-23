import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Component from './Component.jsx'
import State_Props from './State_Props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Component /> */}
    <State_Props />
    {/* <Task_3 /> */}
    {/* <Task_4 /> */}
    {/* <Task_5 /> */}
    {/* <Task_6 /> */}
  </StrictMode>,
)
