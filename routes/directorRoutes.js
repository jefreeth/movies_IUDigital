const {Router} = require('express');
const {obtenerDirector, crearDirector, actualizarDirector, eliminarDirector} = require('../controllers/directorController');

const router = Router();

router.get('/', obtenerDirector);
//ruta post crear director
router.post('/', crearDirector);
//ruta put actualizar director
router.put('/:id', actualizarDirector);
//ruta delete eliminar director
router.delete('/:id', eliminarDirector)

module.exports = router

