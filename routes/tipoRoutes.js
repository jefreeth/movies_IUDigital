const {Router} = require('express');
const {obtenerTipos, crearTipo} = require('../controllers/tipoController')

const router = Router();

router.get('/', obtenerTipos);
router.post('/', crearTipo);

module.exports = router;