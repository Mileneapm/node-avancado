const mongoose = require('mongoose');
const clienteModel = require("../model/cliente.model");

module.exports = () => {

  const clienteController = {}

  clienteController.salvar = async (req, res) => {
    var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(uri);

    const cliente = new clienteModel(req.body);

    res.json(cliente.save())
  }

  clienteController.alterar = async (req, res) => {
    var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(uri);

    await clienteModel.updateOne({ _id: req.body._id }, req.body)

    res.json(req.body)
  }

  clienteController.listar = async (req, res) => {

    var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(uri);

    res.json(await clienteModel.find({}));
  }

  clienteController.excluir = async (req, res) => {
    var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(uri);

    await clienteModel.deleteOne({ _id: req.body._id }, req.body)

    res.json(req.body)

  }

  return clienteController;
}