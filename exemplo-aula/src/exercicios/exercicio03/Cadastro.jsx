import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData(previusFormData => ({
        ...previusFormData,
        [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!formData.nome || !formData.email || !formData.senha) {
      setError("Campos obrigatórios incompletos.");
    }
    if (formData.senha.length < 6) {
      setError("A senha deve ter no mínimo 6 digitos.")
    }

    console.log("Enviando os dados: ");
    console.log(formData.nome);
    console.log(formData.email);
    console.log(formData.senha);
    
    setFormData({
      nome: "",
      email: "",
      senha: ""
    })
  }

  return (
    <div className="max-w-lg mx-auto ">
      <div className="bg-white shadow-xl rounded-lg mb-4 p-6">
        <h2 className="text-2xl text-center text-gray-700 font-bold p-6">
          Faça seu Cadastro
        </h2>
        
        {error && <div className="bg-red-300 text-red-900 font-bold rounded-md p-2">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label className="text-sm text-gray-600 m-2">Nome Completo</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              className="block w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 m-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="block w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 m-2">Senha</label>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              className="block w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 mb-4 mt-4 rounded-md text-white"
          >
            Cadastre-se
          </button>
        </form>

        <button className="text-center text-sm text-gray-600 hover:text-blue-700"
          onClick={() => navigate('/login')}
        >
          Já possui cadastro? Faça seu login.
        </button>
      </div>
    </div>
  );
};

export default Cadastro;
