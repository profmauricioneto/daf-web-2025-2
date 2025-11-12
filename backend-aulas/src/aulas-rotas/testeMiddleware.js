const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

const logMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method}-${req.url}`);
    next();
};

app.get('/', logMiddleware,  (req, res) => {
    res.json({message: 'Hello world'});
})

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
    
})