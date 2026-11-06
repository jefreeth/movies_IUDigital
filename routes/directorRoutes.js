const {Router} = require('express');
const {obtenerDirector, crearDirector} = require('../controllers/directorController');

const router = Router();

router.get('/', obtenerDirector);
router.post('/', crearDirector);

module.exports = router

