const {Router} = require('express')
const {obtenerMedias, crearMedia} = require('../controllers/mediaController')

const router = Router()

router.get('/', obtenerMedias);
router.post('/', crearMedia);

module.exports = router;