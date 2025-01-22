
rchivo README.md:

Comandos utilizados para la creación del proyecto
Inicializar el proyecto con npm:

bash
Copiar
Editar
npm init -y
Instalar las dependencias necesarias:

bash
Copiar
Editar
npm i express cors helmet dotenv pg pg-hstore sequelize
Instalar las dependencias de desarrollo:

bash
Copiar
Editar
npm i nodemon -D
Configuración del Entorno
En el archivo .env podemos agregar las variables de entorno, como la URL de conexión a la base de datos. Por ejemplo:

bash
Copiar
Editar
DATABASE_URL=postgres://usuario:contraseña@127.0.0.1:5432/nombre_base_de_datos
También se incluye un archivo .env.example en la raíz del proyecto como referencia para configurar las variables de entorno.

Estructura del Proyecto
El proyecto se organiza de la siguiente manera para mantener un código limpio y ordenado:

src/: Contiene la lógica principal del proyecto.
utils/: Maneja la conexión con la base de datos, gestión de errores y middlewares reutilizables.
routes/: Contiene los archivos donde se definen las rutas del proyecto.
Raíz del proyecto:
app.js: Configuración principal de la aplicación (middlewares y rutas).
server.js: Configuración del servidor (puerto y arranque).
.env.example: Ejemplo de archivo con las variables de entorno.
Notas Adicionales
Utilizamos utils para organizar la lógica común, como la conexión a la base de datos y el manejo de errores.
routes es donde definimos todas las rutas del proyecto, permitiendo que el código sea modular y fácil de mantener.


