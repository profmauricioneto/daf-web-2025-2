const data = require("../../data/produtos.data");
let idGlobal = 6;

// recupera todos os produtos
const getProdutos = () => {
  return data;
};

// recuperar um produto por id
const getProdutoById = (id) => {
//   if (id != Number) {
//     console.error(`${id} não é um numérico!`);
//     return;
//   }
  const produtoEncontrado = data.find((p) => p.id === id);
  if (!produtoEncontrado) {
    console.error(`Produto não encontrado!`);
    return;
  }
  return produtoEncontrado;
};

// Criar um produto
const createProduto = ({ nome, descrica, preco }) => {
  const produto = { id: ++idGlobal, nome, descrica, preco };
  if (!nome || !descricao || !preco) {
    console.error(`Campos obrigátorios vazios!`);
    return;
  }
  data.push(produto);
};

// Deletar um produto
const deleteProduto = (id) => {
//   if (id !== Number) {
//     console.error(`${id} não é um numérico!`);
//     return;
//   }
  const produtoEncontrado = data.findIndex((p) => p.id === id);
  if (produtoEncontrado == -1) {
    console.error(`Id não corresponde a um produto.`);
    return;
  }
  data.splice(produtoEncontrado, 1);
  console.log(`Produto ${id} deletado com Sucesso`);
};

// Atualizar um produto
const updateProduto = ({ nome, descricao, preco }, id) => {
  const produtoEncontrado = getProdutoById(id);
  if (!produtoEncontrado) {
    console.error(`O produto ${id} não existe na base.`);
    return;
  }
  produtoEncontrado.nome = nome || produtoEncontrado.nome;
  produtoEncontrado.descricao = descricao || produtoEncontrado.descricao;
  produtoEncontrado.preco = preco || produtoEncontrado.preco;

  console.log(`Produto atualizado com sucesso.`);
};

module.exports = {
    getProdutoById,
    getProdutos,
    createProduto,
    deleteProduto,
    updateProduto
}