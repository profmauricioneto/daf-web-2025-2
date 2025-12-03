require('dotenv').config();
const express = require('express');
const routes = require('./modules/produtos-db/produtos.routes');
const app = express();
const PORT = process.env.PORT;

const logMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method}-${req.url}`);
    next();
};
app.use(express.json());
app.use(logMiddleware);

app.use(routes);

app.get('/', (req, res) => {
    res.json({message: 'api-rest de produtos'})
})

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}.`);
});
