var repository = require('../dataBase/repository')()

module.exports = () => {

    const controller = {}

    controller.listar = async (req, res) => {
        var filtro = {}

        var client = await repository.conectar();

        const collectionCliente = client.db("garcon").collection("cliente");

        const clientes = await collectionCliente.find(filtro).toArray();

        return res.json(clientes);

    }

    controller.salvar = async (req, res, callback) => {
      const clienteDados = req.body;   
      
      if (!clienteDados.cep) {            
        throw {httpStatusCode: 400, code: 'ERR001', message: 'cep é obrigatório'};
      }

        //var cep = user.cep
        //capturar o cep e fazer um request na api
        //de de endereços
        //https://viacep.com.br/ws/81050100/json/

        //request(`https://viacep.com.br/ws/${cep}/json/`, (error, response, body) => {
        //    user.endereco = JSON.parse(body)
        //
        //    usuarios.push(user)           
        //
        //    res.send('Usuário adicionado com sucesso!')
        //});
        /*usuarioRep.salvar(user, (usuario, err) => {      
            if (err) {
                return callback(err)
            }         
            res.json(usuario)
        });*/

        var client = await repository.conectar();

        const collectionCliente = client.db("garcon").collection("cliente");

        await collectionCliente.insertOne(clienteDados)

        res.json(clienteDados)
    }

    controller.alterar = async (req, res) => {
        const cliente = req.body;

        var client = await repository.conectar();

        const collectionCliente = client.db("garcon").collection("cliente");

        var clienteId = cliente._id;
        delete cliente._id;
       
        var ObjectID = require('mongodb').ObjectID;
        collectionCliente.updateOne({ _id: ObjectID(clienteId) }, { $set: cliente });
       
        
        res.json(cliente)
    }

    controller.excluir = (req, res) => {
        /*const id = req.params.id

        usuarioRep.excluir(id);

        res.send('Usuário excluído com sucesso!')*/
    }

    return controller
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