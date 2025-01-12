// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskModel = require('../models/taskModel');

// Obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tasks = await taskModel.getTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear una nueva tarea
router.post('/', async (req, res) => {
  const { title, description, listId, userId, dueDate } = req.body;
  try {
    await taskModel.createTask(title, description, listId, userId, dueDate);
    res.status(201).json({ message: 'Tarea creada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar una tarea
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    await taskModel.updateTask(id, title, description, status);
    res.json({ message: 'Tarea actualizada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar una tarea
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await taskModel.deleteTask(id);
    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
