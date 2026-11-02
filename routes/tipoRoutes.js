const {Router} = require('express');
const {obtenerTipos, crearTipo} = require('../controllers/tipoController')

const router = Router();

router.get('/', obtenerTipos);
router.get('/', crearTipo);

module.exports = router;