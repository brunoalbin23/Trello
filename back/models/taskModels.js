// models/taskModel.js
const db = require('../config/db'); // Asegúrate de tener tu conexión a MySQL configurada

// Obtener todas las tareas
const getTasks = () => {
  return db.query('SELECT * FROM tasks');
};

// Crear una nueva tarea
const createTask = (title, description, listId, userId, dueDate) => {
  return db.query('INSERT INTO tasks (title, description, created_at, list_id, user_id, due_date) VALUES (?, ?, NOW(), ?, ?, ?)', 
  [title, description, listId, userId, dueDate]);
};

// Actualizar una tarea
const updateTask = (id, title, description, status) => {
  return db.query('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', 
  [title, description, status, id]);
};

// Eliminar una tarea
const deleteTask = (id) => {
  return db.query('DELETE FROM tasks WHERE id = ?', [id]);
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
