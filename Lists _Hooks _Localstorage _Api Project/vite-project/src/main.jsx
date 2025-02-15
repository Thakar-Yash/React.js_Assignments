import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Events_React from './Events_React'
import Conditional_Rendering from './Conditional_Rendering'
import List_Keys from './List_Keys'
import Forms_React from './Forms_React'
import DataFetcher from './DataFetcher'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Events_React /> */}
    {/* <Conditional_Rendering /> */}
    {/* <List_Keys /> */}
    {/* <Forms_React />  */}
    <DataFetcher />
  </StrictMode>
)
