const mongoose = require('mongoose');
const pedidoModel = require("../model/pedido.model");
const clienteModel = require("../model/cliente.model");
//const cardapioModel = require("../model/cardapio.model");

module.exports = () => {

  const pedidoController = {}

  pedidoController.salvar = async (req, res) => {
    var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(uri);

    const pedido = new pedidoModel(req.body);

    res.json(pedido.save())
  }

  pedidoController.listar = async (req, res) => {

    const id = req.params.id
    var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(uri);

    var pedido = await pedidoModel.findById(id).exec();

    pedido.cliente = await clienteModel.findById(pedido._idCliente).exec();


    res.json(pedido)
  }

  return pedidoController
}