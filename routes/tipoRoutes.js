const {Router} = require('express');
const {obtenerTipos, crearTipo, actualizarTipo, eliminarTipo} = require('../controllers/tipoController')

const router = Router();

router.get('/', obtenerTipos);
//ruta post crear tipo 
router.post('/', crearTipo);
//ruta put actualizar tipo
router.put('/:id', actualizarTipo);
//ruta delete eliminar tipo
router.delete('/:id', eliminarTipo)

module.exports = router;