//importamos las librerias necesarias
const express = require('express');
const cors = require('cors');
require ('dotenv').config();

//aplicacion express
const app = express();

//configuraciones basicas 
app.use(express.json());
app.use(cors());


//ruta de prueba inicial
app.get('/', (req, res) => {
    res.json({mensaje: 'biemvenido alk API  de peliculas de la IUDigital' });
});

//definir el puerto del servidor
const PORT = process.env.PORT || 4000;

//ponemos escuchar al servidor 
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
})
