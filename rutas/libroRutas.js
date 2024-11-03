const express = require('express');
const { crearLibro, obtenerLibros, actualizarLibro, eliminarLibro } = require('../controladores/libroControlador'); // Verifica esta línea
const autenticacionMiddleware = require('../middleware/autentitacionMiddleware');
const router = express.Router();

router.post('/', autenticacionMiddleware, crearLibro);
router.get('/', obtenerLibros);
router.put('/:id', autenticacionMiddleware, actualizarLibro);
router.delete('/:id', autenticacionMiddleware, eliminarLibro);

module.exports = router;
