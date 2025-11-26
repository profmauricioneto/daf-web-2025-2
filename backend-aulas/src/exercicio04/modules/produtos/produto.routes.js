const produtosController = require('./produto.controller');
const express = require('express');
const router = express.Router();

router.get('/produtos', produtosController.getProdutosController);
router.get('/produtos/:id', produtosController.getProdutoByIdController);
router.post('/produtos', produtosController.createProdutoController);
router.delete('/produtos/:id', produtosController.deleteProdutoController);
router.put('/produtos/:id', produtosController.updateProdutoController);

module.exports = router;