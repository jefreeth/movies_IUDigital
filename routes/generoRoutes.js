const {Router} = require('express');
const {obtenerGeneros, crearGenero, actualizarGenero, eliminarGenero} = require('../controllers/generoController');

const router = Router();

//ruta GET para listar generos
router.get('/', obtenerGeneros);

//ruta POST para crear generos
router.post('/', crearGenero);

//ruta PUT para actualizar generos
router.put('/:id', actualizarGenero);

//ruta DELETE para eliminar genero
router.delete('/:id', eliminarGenero)

module.exports = router;