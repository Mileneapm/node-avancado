const routing = require('express').Router();

var clienteController = require('../controller/cliente.controller')()
var cardapioController = require('../controller/cardapio.controller')()
var pedidoController = require('../controller/pedido.controller')()

routing.get('/cliente', clienteController.listar)
routing.post('/cliente', clienteController.salvar)
routing.put('/cliente', clienteController.alterar)
routing.delete('/cliente', clienteController.excluir)

routing.get('/cardapio', cardapioController.listar)
routing.post('/cardapio', cardapioController.salvar)
routing.put('/cardapio', cardapioController.alterar)
routing.delete('/cardapio', cardapioController.excluir)

routing.get('/pedido', pedidoController.listar)
routing.post('/pedido', pedidoController.salvar)
routing.put('/pedido', pedidoController.alterar)
routing.delete('/pedido', pedidoController.excluir)


module.exports = routing