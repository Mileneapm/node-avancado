const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({
  _idCliente: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  nummesa: {
    type: Number,
    required: true,
  }
});

const Pedido = mongoose.model("pedido", PedidoSchema);

module.exports = Pedido;