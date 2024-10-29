const express = require('express');
const CursoMatematicas = require('../models/CursoMatematicas'); // Asegúrate de que esta ruta sea correcta

const router = express.Router();

// Crear un nuevo curso de matemáticas
router.post('/', (req, res) => {
  const curso = new CursoMatematicas(req.body);
  curso
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

// Obtener todos los cursos de matemáticas
router.get('/', (req, res) => {
  CursoMatematicas
    .find()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

// Obtener un curso de matemáticas por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  CursoMatematicas
    .findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

// Eliminar un curso de matemáticas por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  CursoMatematicas
    .findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

// Actualizar un curso de matemáticas por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, materia, vistas, nivel } = req.body;
  CursoMatematicas
    .findByIdAndUpdate(id, { $set: { titulo, materia, vistas, nivel } }, { new: true })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

module.exports = router;
