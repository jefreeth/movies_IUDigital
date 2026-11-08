const {Router} = require('express')
const {obtenerMedias, crearMedia, actualizarMedia, eliminarMedia} = require('../controllers/mediaController')

const router = Router()

router.get('/', obtenerMedias);
//ruta post crear media
router.post('/', crearMedia);
//ruta put actualizr media
router.put('/:id', actualizarMedia);
//ruta delete eliminar media
router.delete('/:id', eliminarMedia)

module.exports = router;