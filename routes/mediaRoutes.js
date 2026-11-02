const {Router} = require('express')
const {obtenerMedias, crearMedia} = require('../controllers/mediaController')

const router = Router()

router.get('/', obtenerMedias);
router.get('/', crearMedia);

module.exports = router;