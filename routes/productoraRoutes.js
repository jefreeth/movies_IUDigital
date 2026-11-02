const {Router} = require('express');
const {obtenerProductoras, crearProductora} = require('../controllers/productoraController');

const router = Router();

router.get('/', obtenerProductoras);
router.get('/', crearProductora);

module.exports = router;
