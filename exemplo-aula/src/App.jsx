import React from "react";
// import Cadastro from "./exercicios/exercicio03/Cadastro";
// import FormComponent from "./Components/FormComponent";
// import Contador from "./Components/Contador";
// import Navigator from "./exercicios/exercicio03/Navigator";
// import ExemploUseEffect from "./Components/ExemploUseEffect";
// import GetPostsAPI from "./Components/GetPostsAPI";
// import ListaTarefas from "./exercicios/exericicio06/ListaTarefas";
// import useCounter from "./stores/counterStore";
import AppFavorite from "./exercicios/exercicio08/AppFavorite";

const App = () => {

  // const count = useCounter((state) => state.count);
  // const increment = useCounter((state) => state.increment);
  // const decrement = useCounter((state) => state.decrement);

  return (
    <>
      <div>
        <AppFavorite />
        {/* <h1>Valor: {count}</h1>

        <button onClick={() => increment()}>Aumentar</button>
        <button onClick={() => decrement()}>Diminuir</button> */}
        {/* <ListaTarefas /> */}
        {/* <GetPostsAPI /> */}
        {/* <ExemploUseEffect /> */}
        {/* <Navigator /> */}
        {/* <Contador /> */}
        {/* <FormComponent /> */}
        {/* <Cadastro /> */}
      </div>
    </>
  );
};

export default App;
