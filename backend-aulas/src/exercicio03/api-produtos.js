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
})

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
});