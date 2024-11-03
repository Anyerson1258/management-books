const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombreusuario: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
