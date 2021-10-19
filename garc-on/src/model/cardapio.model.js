const mongoose = require("mongoose");

const CardapioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
  },
  valor: {
    type: Number,
    required: 0,
  }
});

const Cardapio = mongoose.model("cardapio", CardapioSchema);

module.exports = Cardapio;