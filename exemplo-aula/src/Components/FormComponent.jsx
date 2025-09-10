import React, { useState } from "react";

const FormComponent = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '') {
        setError('Campo obrigatorio vazio!')
        return;
    }

    if (username === 'mauricio') {
        alert('Login realizado com sucesso')
    } else {
        setError('Credencial errada')
    }
  }

  const handleChange = (event) => {
    setUsername(event.target.value);
    console.log(username);
  }

  return (
    <div className="max-w-lg mx-auto shadow-lg mt-2">
      <form className="text-gray-700 space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl p-4">Exemplo de Formulário</h2>
        <label className="block">Nome Completo</label>
        <input 
            type="text" 
            name="username" 
            value={username}
            onChange={handleChange}
            className="block rounded-md w-full bg-white border border-blue-50 p-2 hover:ring-blue-700 ring-2" 
        />

        <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors rounded"
        >Enviar</button>
        {error && (
            <p className="text-red-700">{error}</p>
        )}
      </form>
    </div>
  );
};
export default FormComponent;
