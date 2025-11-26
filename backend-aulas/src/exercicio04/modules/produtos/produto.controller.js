const produtoModel = require('./produto.model');

exports.getProdutoByIdController = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const produtoEncontrado = produtoModel.getProdutoById(id);
        if (!produtoEncontrado) {
            console.error(`Erro na busca pelo produto!`);
            return;
        }
        res.json({message: `Produto encontrado com sucesso`, produtoEncontrado})
    } catch (error) {
        console.error(`Error na busca do produto de id: ${id}`);
    }
}

exports.getProdutosController = (req, res) => {
    try {
        const produtos = produtoModel.getProdutos();
        if (!produtos) {
            console.error(`Produtos não encontrados.`);
            return;
        }
        res.json(produtos);
    } catch (error) {
        console.error(`Error na busca dos produtos`);
    }
}

exports.createProdutoController = (req, res) => {
    try {
        const {nome, descricao, preco} = req.body;
        if (!nome || !descricao || !preco) {
            console.error(`Campos obrigatórios vazios.`);
            return;
        }
        produtoModel.createProduto(nome, descricao, preco);
        res.json({message: `Produto criado com sucesso.`});
    } catch (error) {
        console.error(`Error ao inserir um produto.`);
    }
}

exports.deleteProdutoController = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        produtoModel.deleteProduto(id);
        res.json({message: `produto deletado com sucesso.`})
    } catch (error) {
        console.error(`Error ao deletar um produto.`);
    }
}

exports.updateProdutoController = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {nome, descricao, preco} = req.body;

        produtoModel.updateProduto({nome, descricao, preco}, id);

        res.json({message: 'produto atualizado com sucesso.'})
    } catch (error) {
        console.error(`Error ao atualizar um produto.`);
    }
}