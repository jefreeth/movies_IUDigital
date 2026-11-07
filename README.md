# 🎬 API REST - Sistema de Gestión de Películas y Series

API backend desarrollada con **Node.js**, **Express** y **MongoDB Atlas (Mongoose)** para la gestión y administración de un catálogo audiovisual (Películas, Series, Directores, Productoras y Géneros). Proyecto desarrollado para el ámbito académico.

---

## 🚀 Tecnologías y Herramientas Utilizadas
* **Node.js** - Entorno de ejecución para JavaScript.
* **Express** - Framework web para Node.js.
* **MongoDB Atlas** - Base de datos NoSQL en la nube.
* **Mongoose** - ODM para modelar los datos de MongoDB.
* **Dotenv** - Manejo seguro de variables de entorno.
* **Thunder Client / Postman** - Pruebas de endpoints HTTP.

---

## 📂 Estructura del Proyecto

```text
├── config/
│   └── db.config.js       # Configuración y conexión a MongoDB Atlas
├── controllers/
│   ├── generoController.js
│   ├── directorController.js
│   ├── productoraController.js
│   ├── tipoController.js
│   └── mediaController.js # Controlador principal con relaciones (.populate)
├── models/
│   ├── Genero.js
│   ├── Director.js
│   ├── Productora.js
│   ├── Tipo.js
│   └── Media.js           # Esquema central que une todos los módulos
├── routes/
│   ├── generoRoutes.js
│   ├── directorRoutes.js
│   ├── productoraRoutes.js
│   ├── tipoRoutes.js
│   └── mediaRoutes.js
├── .env.example           # Plantilla de variables de entorno
├── .gitignore             # Archivos ignorados por Git
├── index.js               # Archivo principal del servidor
└── package.json

## clonar el repositorio:
git clone [https://github.com/tu-usuario/nombre-del-repositorio.git](https://github.com/tu-usuario/nombre-del-repositorio.git) 

##instalar dependencias:
npm install

##configurar variables con credenciales
PORT=4000
DB_CNN=mongodb+srv://<usuario>:<password>@cluster0.xxxxx.mongodb.net/<nombre-bd>

##ejecutar el servidor
npm start
# o simplemente:
node index.js