const {Router} = require('express');
const {obtenerProductoras, crearProductora} = require('../controllers/productoraController');

const router = Router();

router.get('/', obtenerProductoras);
router.post('/', crearProductora);

module.exports = router;
