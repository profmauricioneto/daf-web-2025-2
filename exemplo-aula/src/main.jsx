import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import FirstComponent from './Components/FirstComponent'
// import { CalcBirthYear, Greeting } from './Components/Greeting'
import UserList from './exercicios/exercicio01/UserList';
// import CardBotao from './Components/CardBotao';
// import CardDiferenciado from './Components/CardDiferenciado';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <h1 className='text-3xl font-bold underline'>Testando o tailwindcss.</h1> */}
    {/* <h1>Hello World</h1>
    <FirstComponent />
    <Greeting name="Maurício" />
    <CalcBirthYear  age={35}/> */}
    <UserList />
    {/* <CardBotao />
    <CardDiferenciado /> */}
  </StrictMode>,
)
