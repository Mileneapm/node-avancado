const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
    },
    senha: {
        type: Number,
        required: 0,
    },
    permissoes: {
        type: Array,
        default: {}
    }
});

const Usuario = mongoose.model("usuario", UsuarioSchema);

module.exports = Usuario;