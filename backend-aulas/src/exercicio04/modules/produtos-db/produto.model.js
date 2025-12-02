const { PrismaClient } = require('../../../generated/prisma');

const prisma = new PrismaClient();

// criar um produto
const criarProduto = async (produto) => {
  try {
    return await prisma.produto.create({
      data: {
        nome: produto.nome,
        descricao: produto.descricao,
        preco: produto.preco
      }
    });
  } catch (error) {
    throw new Error(`Erro ao criar produto: ${error.message}`);
  }
};

// buscar produtos
const listarProdutos = async () => {
  try {
    return await prisma.produto.findMany({
      orderBy: {
        id: 'asc'
      }
    });
  } catch (error) {
    throw new Error(`Erro ao listar produtos: ${error.message}`);
  }
};

// buscar produto por id
const buscarProdutoPorId = async (id) => {
  try {
    return await prisma.produto.findUnique({
      where: {
        id: parseInt(id)
      }
    });
  } catch (error) {
    throw new Error(`Erro ao buscar produto: ${error.message}`);
  }
};

// atualizar um produto
const atualizarProduto = async (id, produto) => {
  try {
    return await prisma.produto.update({
      where: {
        id: parseInt(id)
      },
      data: {
        nome: produto.nome,
        descricao: produto.descricao,
        preco: produto.preco
      }
    });
  } catch (error) {
    throw new Error(`Erro ao atualizar produto: ${error.message}`);
  }
};

// deletar um produto
const deletarProduto = async (id) => {
  try {
    return await prisma.produto.delete({
      where: {
        id: parseInt(id)
      }
    });
  } catch (error) {
    throw new Error(`Erro ao deletar produto: ${error.message}`);
  }
};

module.exports = {
    criarProduto,
    listarProdutos,
    buscarProdutoPorId,
    atualizarProduto,
    deletarProduto
};