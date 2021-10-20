const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({
    nome: {
        type: String
      },
      cpf: {
        type: Number
      },
  });

const PedidoSchema = new mongoose.Schema({
  valor: {
    type: Number,
    required: true,
  },
  _idCliente: {
    type: String,
    required: true,
  }
});

const Pedido = mongoose.model("pedido", PedidoSchema);

module.exports = Pedido;

//testar id cliente e id pedido
//somar pedido

/*status: {
    type: String,
    required: true,
  },
  nummesa: {
    type: Number,
    required: true,
  },
  _idCliente: {
    type: String,
    required: true,
  },
  cliente: {
      type: subSchema,
      default: {}
  } */