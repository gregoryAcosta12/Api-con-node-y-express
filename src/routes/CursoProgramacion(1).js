const express = require('express');
const CursoProgramacion = require('../models/CursoProgramacion'); // Asegúrate de que esta ruta sea correcta

const router = express.Router();

// Crear un nuevo curso
router.post('/', (req, res) => {
  const curso = new CursoProgramacion(req.body);
  curso
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

// Obtener todos los cursos
router.get('/', (req, res) => {
  CursoProgramacion
    .find()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

// Obtener un curso por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  CursoProgramacion
    .findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

// Eliminar un curso por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  CursoProgramacion
    .findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

// Actualizar un curso por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, lenguaje, vistas, nivel } = req.body;
  CursoProgramacion
    .findByIdAndUpdate(id, { $set: { titulo, lenguaje, vistas, nivel } }, { new: true })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

module.exports = router;
