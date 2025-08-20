import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FirstComponent from './Components/FirstComponent'
import { CalcBirthYear, Greeting } from './Components/Greeting'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello World</h1>
    <FirstComponent />
    <Greeting name="Maurício" />
    <CalcBirthYear  age={35}/>
  </StrictMode>,
)
