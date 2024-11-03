const jwt = require('jsonwebtoken');

const autenticacionMiddleware = (req, res, next) => {
    const token = req.header('Autenticacion');
    if (!token) return res.status(401).json({ mensaje: 'No autorizado'});

    try {
        req.usuario = jwt.verify(token, process.env.JWT_SECRET);
        next();
    }catch (error){
        res.status(401).json({mensaje: 'Token no valido'});
    }
}

module.exports = autenticacionMiddleware;