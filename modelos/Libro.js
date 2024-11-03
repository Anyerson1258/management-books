const mongoose = require('mongoose');
const LibroSchema = new mongoose.Schema({

titulo: { type: String, require: true},
autor: { type: String, require: true},
anio: { type: Number, require: true},
estado: { type: String, enum: ['disponible', 'reservado'], default: 'disponible'},

});

module.exports = mongoose.model('Libro', LibroSchema);