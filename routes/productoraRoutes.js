const {Router} = require('express');
const {obtenerProductoras, crearProductora} = require('../controllers/productoraController');
const { actualizarProductora } = require('../controllers/productoraController');
const { eliminarDirector } = require('../controllers/directorController');
const { eliminarProductora } = require('../controllers/productoraController');

const router = Router();

router.get('/', obtenerProductoras);
//ruta post crearproductora
router.post('/', crearProductora);
//ruta put actualizar productora
router.put('/:id', actualizarProductora);
//ruta delete eliminar productora
router.delete('/:id', eliminarProductora)

module.exports = router;
