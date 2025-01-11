# Trello
Implementación simple de Trello con React y Node.js

Info estructura carpetas Back

- controllers: Contiene los controladores que definen la lógica para manejar las solicitudes HTTP (por ejemplo, obtener productos, agregar usuarios).
- models: Define las entidades de la base de datos (por ejemplo, product.js, user.js).
- routes: Aquí defines las rutas para cada entidad (por ejemplo, /products, /users) y las asocias con los controladores correspondientes.
- services: Contiene la lógica de negocio y las operaciones que se realizan sobre la base de datos, utilizando los modelos.
- middleware: Define middleware que se ejecutan en las rutas (por ejemplo, autenticación o validaciones).
- config: Archivos de configuración (por ejemplo, conexión a la base de datos).
- utils: Funciones útiles o auxiliares que no encajan en otros directorios.
- .env: Variables de entorno, como las credenciales de la base de datos y el puerto del servidor.
- server.js: Archivo principal que configura Express y otros middlewares, y arranca el servidor.