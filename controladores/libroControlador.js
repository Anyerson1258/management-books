const Libro = require('../modelos/Libro');

// Crear un Libro
exports.crearLibro = async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        const guardarLibro = await nuevoLibro.save();
        res.json(guardarLibro);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el libro' });
    }
};

// Obtener todos los libros creados
exports.obtenerLibros = async (req, res) => { 
    try {
        const libros = await Libro.find(); 
        res.json(libros); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los libros creados' });
    }
};

// Actualizar un libro
exports.actualizarLibro = async (req, res) => {
    try {
        const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(libro);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Eliminar un libro
exports.eliminarLibro = async (req, res) => {
    try {
        await Libro.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Libro eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
