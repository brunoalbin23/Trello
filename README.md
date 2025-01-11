# Trello
Implementación simple de Trello con React y Node.js

### Info estructura carpetas Back

- controllers: Contiene los controladores que definen la lógica para manejar las solicitudes HTTP (por ejemplo, obtener productos, agregar usuarios).
- models: Define las entidades de la base de datos (por ejemplo, product.js, user.js).
- routes: Aquí defines las rutas para cada entidad (por ejemplo, /products, /users) y las asocias con los controladores correspondientes.
- services: Contiene la lógica de negocio y las operaciones que se realizan sobre la base de datos, utilizando los modelos.
- middleware: Define middleware que se ejecutan en las rutas (por ejemplo, autenticación o validaciones).
- config: Archivos de configuración (por ejemplo, conexión a la base de datos).
- utils: Funciones útiles o auxiliares que no encajan en otros directorios.
- .env: Variables de entorno, como las credenciales de la base de datos y el puerto del servidor.
- server.js: Archivo principal que configura Express y otros middlewares, y arranca el servidor.

### Info estructura carpetas Front

- public/: Archivos estáticos que no se procesan por Vite, como index.html.
- src/: Todo el código fuente de tu aplicación.
 - assets/: Para imágenes, iconos y fuentes.
 - components/: Componentes que puedes reutilizar en varias partes de la app.
 - pages/: Componentes que representan diferentes vistas o páginas.
 - hooks/: Hooks personalizados para lógica reutilizable.
 - context/: Archivos de contexto para manejar el estado global.
 - services/: Funciones para interactuar con APIs o servicios externos.
 - App.jsx: El componente principal donde configuras tu aplicación.
 - main.jsx: Punto de entrada donde se monta la aplicación.
 - router.jsx: Si usas React Router, puedes definir todas las rutas aquí.

 Front

 Gestionar rutas entre paginas

 npm install react-router-dom


algo asi va a ser la bd

CREATE TABLE boards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
lists: Representa las listas dentro de los tableros.

sql
Copiar código
CREATE TABLE lists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    board_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE
);
tasks: Representa las tareas dentro de las listas.

sql
Copiar código
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    list_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (list_id) REFERENCES lists(id) ON DELETE CASCADE

    