const routing = require('express').Router();

var clienteController = require('../controller/cliente.controller')()

routing.get('/cliente', clienteController.listar)
routing.post('/cliente', clienteController.salvar)
routing.put('/cliente', clienteController.alterar)
//routing.delete('/cliente/:id', clienteController.excluir)

module.exports = routing