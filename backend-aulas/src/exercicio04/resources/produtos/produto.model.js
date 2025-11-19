const data = require('../../data/produtos.data');

// recupera todos os produtos
const getProdutos = () => {
    return data;
}

// recuperar um produto por id
const getProdutoById = (id) => {
    if (id !== Number) {
        console.error(`${id} não é um numérico!`);
        return
    }
    const produtoEncontrado = data.find(p => p.id === id);
    if (!produtoEncontrado) {
        console.error(`Produto não encontrado!`);
        return;
    }
    return produtoEncontrado;
};

// Criar um produto