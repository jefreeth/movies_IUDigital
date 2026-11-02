const {Router} = require('express');
const {obtenerGeneros, crearGenero} = require('controllers/generoController.js');

const router = Router();

//ruta GET para listar generos
router.get('/', obtenerGeneros);

//ruta POST para crear generos
router.post('/', crearGenero);

module.exports = router;