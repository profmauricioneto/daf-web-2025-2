const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Bem vindo ao meu Site!</h1>')
});

app.get('/sobre', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', function(error, data){
        res.send(data);
        res.end();;
    });
});

app.get('/usuarios/:nome', (req, res) => {
    const name = req.params.nome;

    res.send(`<h1>Olá Sr(a) ${name.toUpperCase()}</h1>`);
})

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
})