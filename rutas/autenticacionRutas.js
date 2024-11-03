const express = require('express');
const { registro, ingreso } = require('../controladores/autenticacionControlador');
const router = express.Router();

router.post('/registro', registro);
router.post('/ingreso', ingreso);

module.exports = router;
