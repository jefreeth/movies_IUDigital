//importamos las librerias necesarias
const express = require('express');
const cors = require('cors');
require ('dotenv').config();
const generoRoutes = require('./routes/generoRoutes.js')
const directorRoutes = require('./routes/directorRoutes.js')
const productoraRoutes = require('./routes/productoraRoutes.js')
const tipoRoutes = require('./routes/tipoRoutes.js')
const mediaRoutes = require('./routes/mediaRoutes.js')

//aplicacion express
const app = express();

//configuraciones basicas 
app.use(express.json());
app.use(cors());

//definimos rutas para generos
app.use('/api/generos', generoRoutes);
//definimos rutas para director
app.use('/api/directores', directorRoutes)
//definimos rutas para productora
app.use('/api/productoras', productoraRoutes)
//definimos rutas para tipos
app.use('/api/tipos', tipoRoutes)
//definimos rutas para media
app.use('/api/medias', mediaRoutes)

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
