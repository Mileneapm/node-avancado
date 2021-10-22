const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: Number,
    required: 0,
  },
  cep: {
    type: Number,
    default: 0,
  },
  complemento: {
    type: String,
  }
});

const Clientes = mongoose.model("clientes", ClienteSchema);

module.exports = Clientes;