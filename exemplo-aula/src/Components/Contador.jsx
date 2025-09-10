import React, { Fragment, useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <Fragment>
      <div>
        <h3>Contagem: {contador}</h3>
        <button onClick={() => setContador(contador + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors rounded"
            >Clique Aqui</button>
      </div>
    </Fragment>
  );
};

export default Contador;
