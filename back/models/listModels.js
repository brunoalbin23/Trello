// models/listModel.js
const db = require('../config/db'); // Asegúrate de tener tu conexión a MySQL configurada

// Obtener todas las listas
const getLists = () => {
  return db.query('SELECT * FROM lists');
};

// Crear una nueva lista
const createList = (name) => {
  return db.query('INSERT INTO lists (name, created_at) VALUES (?, NOW())', [name]);
};

// Actualizar una lista
const updateList = (id, name) => {
  return db.query('UPDATE lists SET name = ? WHERE id = ?', [name, id]);
};

// Eliminar una lista
const deleteList = (id) => {
  return db.query('DELETE FROM lists WHERE id = ?', [id]);
};

module.exports = { getLists, createList, updateList, deleteList };
