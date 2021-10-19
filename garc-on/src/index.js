const express = require('express')
const yaml = require('js-yaml')
const fs = require('fs')
//const mongoose = require("mongoose");

var env = process.env.NODE_ENV || 'dev';

  try {
    let fileContents = fs.readFileSync('./config/host.yaml', 'utf8');
    data = yaml.load(fileContents);
      } catch (e) {
        console.log(e);
  }

  const app = express()
  const port = data['port']

  app.use(express.json())

  const routing = require('./routes/routing')

  app.use(routing) 

  app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })


/*
async function testarMongoose() {

  var uri = "mongodb://milene:12345@cluster0-shard-00-00.662hk.mongodb.net:27017,cluster0-shard-00-01.662hk.mongodb.net:27017,cluster0-shard-00-02.662hk.mongodb.net:27017/garcon?ssl=true&replicaSet=atlas-gr7imv-shard-0&authSource=admin&retryWrites=true&w=majority";

  await mongoose.connect(uri);

  const clienteModel = require("./model/cliente.model");

  const cliente = new clienteModel({ nome: 'Giane', cpf: 26, cep: 83880000, complemento: "apto 04" });
  
  cliente.save();

}

testarMongoose();




  
  var repository = require('./dataBase/repository')()

  async function testarMongoDb() {

    var client = await repository.conectar();

    const collectionCliente = client.db("garcon").collection("cliente");

    await collectionCliente.insertOne({ nome: 'Martins', idade: 22 })

}

testarMongoDb();
  */ 