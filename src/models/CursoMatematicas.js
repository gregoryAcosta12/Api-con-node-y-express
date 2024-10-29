const mongoose = require('mongoose');

const cursoMatematicasSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  titulo: {
    type: String,
    required: true
  },
  materia: {
    type: String,
    required: true
  },
  vistas: {
    type: Number,
    required: true
  },
  nivel: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('CursoMatematicas', cursoMatematicasSchema);
