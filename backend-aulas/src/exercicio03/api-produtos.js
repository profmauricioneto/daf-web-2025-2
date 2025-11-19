const express = require('express');
const app = express();

const PORT = 3000;

const produtos = [
    {id: 1, nome: 'bola', descricao: 'bola quadrada do kiko', preco: 100.00 },
    {id: 2, nome: 'boneco', descricao: 'boneco do heman', preco: 86.00 },
    {id: 3, nome: 'camisa', descricao: 'camisa do fortaleza serie B', preco: 154.00 },
    {id: 4, nome: 'oculos', descricao: 'oculos de sol fulerage', preco: 50.00 },
    {id: 5, nome: 'relógio', descricao: 'relógio roskovisk', preco: 212.00 },
];

// definição de middlewares e aplicação nas rotas
const logMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method}-${req.url}`);
    next();
};
let idProximo = 5;

app.use(express.json());
app.use(logMiddleware);

// rotas da aplicação
// 1. recuperar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// 2. recuperar um produto por ID
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find((prod) => prod.id === id);
    if (produto) {
        res.json(produto);
    } else {
        res.json({message: "erro: id não corresponde a nenhum produto!"});
    }
});

// 3. criar um produto
app.post('/produtos', (req, res) => {
    // const nome = req.body.nome;
    // const descricao = req.body.descricao;
    // const preco = parseFloat(req.body.preco);
    const {nome, descricao, preco} = req.body;

    const produto = {id: ++idProximo, nome, descricao, preco};
    if (!produto) {
        res.json({message: 'Error ao adicionar um novo produto'})
    } else {
        produtos.push(produto);
        res.json({message: 'produto adicionado com sucesso', produto});
    }
});

// 4. Atualizar um produto
app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produtoEncontrado = produtos.find(p => p.id === id);
    if (!produtoEncontrado) return res.json({message: 'Este id não tem referencia de nenhum produto'});

    const {nome, descricao, preco} = req.body;
    produtoEncontrado.nome = nome || produtoEncontrado.nome;
    produtoEncontrado.descricao = descricao || produtoEncontrado.descricao;
    produtoEncontrado.preco = preco || produtoEncontrado.preco;

    res.json({message: 'Produto atualizado com sucesso', produto: produtoEncontrado});
});

// 5. Deletar um produto
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produtoIndex = produtos.findIndex(p => p.id === id);
    if (produtoIndex == -1) return res.json({message: 'Este id não corresponde a um produto!'});

    produtos.splice(produtoIndex, 1);
    res.json({message: 'produto excluído com sucesso!'});
})


app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
});