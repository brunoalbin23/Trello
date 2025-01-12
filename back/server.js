// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Importar rutas
const boardRoutes = require('./routes/boardRoutes');
const listRoutes = require('./routes/listRoutes'); // (Pendiente de implementar)
const taskRoutes = require('./routes/taskRoutes'); // (Pendiente de implementar)

// Configuración de variables de entorno
dotenv.config();

// Inicialización de la app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = require('./config/db');
db.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

// Rutas
app.use('/api/boards', boardRoutes);
//app.use('/api/lists', listRoutes); // Enlace para listas (CRUD pendiente)
//app.use('/api/tasks', taskRoutes); // Enlace para tareas (CRUD pendiente)

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
