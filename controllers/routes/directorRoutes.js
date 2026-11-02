const {Router} = require('express');
const {obtenerDirector, crearDirector} = require('controllers/directorController.js');

const router = Router();

router.get('/', obtenerDirector);
router.get('/', crearDirector);

module.exports = router
