const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  }
});

const Pedido = mongoose.model("pedido", PedidoSchema);

module.exports = Pedido;