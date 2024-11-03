const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../modelos/Usuario');

// Registrar usuario
exports.registro = async (req, res) => {
    const { nombreusuario, contrasena } = req.body;
    try {
        let user = await Usuario.findOne({ nombreusuario });
        if (user) return res.status(400).json({ message: 'El usuario ya existe' });

        user = new Usuario({ nombreusuario, contrasena: await bcrypt.hash(contrasena, 10) });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Login de usuario
exports.ingreso = async (req, res) => {
    const { nombreusuario, contrasena } = req.body;
    try {
        const user = await Usuario.findOne({ nombreusuario });
        if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

        const isMatch = await bcrypt.compare(contrasena, user.contrasena);
        if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};