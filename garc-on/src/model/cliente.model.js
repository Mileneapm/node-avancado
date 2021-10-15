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
    default: true,
  }
  //permissoes: {
   // type: Array,
   // default: {}
//}
});

const User = mongoose.model("cliente", ClienteSchema);

module.exports = User;