const mongoose = require('mongoose');
const usuarioModel = require("../model/usuario.model");
const jwt = require('jsonwebtoken');

module.exports = () => {

    const usuarioController = {}

    usuarioController.salvar = async (req, res) => {
        var user = req.body

        var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

        await mongoose.connect(uri);

        var userdb = await usuarioModel.find({ login: user.login }).exec()

        user.permissoes = userdb['permissoes'];

        //comparar a senha do request com a senha do banco

        delete user.senha

        var token = jwt.sign({ user }, 'userToken', {
            expiresIn: 300 // expires in 5min
        });

        user.token = token

        res.json(user)
    }


    usuarioController.listar = async (req, res) => {

        var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

        await mongoose.connect(uri);

        res.json(await clienteModel.find({}));
    }

    return usuarioController
}