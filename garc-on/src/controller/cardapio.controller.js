const mongoose = require('mongoose');
const cardapioModel = require("../model/cardapio.model");

module.exports = () => {

  const cardapioController = {}

  cardapioController.salvar = async (req, res) => {
    var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(uri);

    const cardapio = new cardapioModel(req.body);

    res.json(cardapio.save())
  }

  cardapioController.alterar = async (req, res) => {
    var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(uri);

    await cardapioModel.updateOne({ _id: req.body._id }, req.body)

    res.json(req.body)
  }

  cardapioController.listar = async (req, res) => {

    var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(uri);

    res.json(await cardapioModel.find({}));
  }

  cardapioController.excluir = async (req, res) => {
    var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

    await mongoose.connect(uri);

    await cardapioModel.deleteOne({ _id: req.body._id }, req.body)

    res.json(req.body)

  }

  return cardapioController;
}


/*
var clienteDataBase = require('../dataBase/cliente.dataBase')()

module.exports = () => {

  const controller = {}

    controller.listar = (req, res, callback) => {

      clienteDataBase.listar((cliente, err) => {
        if (err) {
          return callback(err)
      }
      res.status(200).json(cliente)
      })
    }

    controller.salvar = (req, res, callback) => {
      const clienteDados = req.body;

      if (!clienteDados.cep) {
        throw {httpStatusCode: 400, code: 'ERR001', message: 'cep é obrigatório'};
      }
      clienteDataBase.salvar(clienteDados, (cliente, err) => {
          if (err) {
              return callback(err)
           }
        res.json(cliente)
      });
    }

    controller.excluir = (req, res) => {
      const id = req.params.id

      clienteDataBase.excluir(id)

      res.send('Cliente excluído com sucesso!')
    }

    controller.alterar = (req, res) => {}

  return controller
}
*/