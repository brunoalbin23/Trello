// routes/listRoutes.js
const express = require('express');
const router = express.Router();
const listModel = require('../models/listModel');

// Obtener todas las listas
router.get('/', async (req, res) => {
  try {
    const lists = await listModel.getLists();
    res.json(lists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear una nueva lista
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    await listModel.createList(name);
    res.status(201).json({ message: 'Lista creada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar una lista
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await listModel.updateList(id, name);
    res.json({ message: 'Lista actualizada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar una lista
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await listModel.deleteList(id);
    res.json({ message: 'Lista eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
