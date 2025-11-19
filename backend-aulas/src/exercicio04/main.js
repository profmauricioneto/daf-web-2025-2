const express = require('express');
const app = express();

const PORT = 3000;

const logMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method}-${req.url}`);
    next();
};
app.use(express.json());
app.use(logMiddleware);

app.get('/', (req, res) => {
    res.json({message: 'api-rest de produtos'})
})

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}.`);
});
