const mongoose = require('mongoose');
const pedidoModel = require("../model/pedido.model");

module.exports = () => {

    const pedidoController = {}

    pedidoController.salvar = async (req, res) => {
        var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

        await mongoose.connect(uri);

        const pedido = new pedidoModel(req.body);

        res.json(pedido.save())
    }

    pedidoController.alterar = async (req, res) => {
        var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

        await mongoose.connect(uri);

        await pedidoModel.updateOne({_id:req.body._id}, req.body)

        res.json(req.body)
    }

    pedidoController.listar = async (req, res) => {
        
        var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

        await mongoose.connect(uri);

        res.json(await pedidoModel.find({}));
    }

    pedidoController.excluir = async (req, res) => {
      var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

        await mongoose.connect(uri);

        await pedidoModel.deleteOne({_id:req.body._id}, req.body)

        res.json(req.body)
        
    }

    return pedidoController;
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