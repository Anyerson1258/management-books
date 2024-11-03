const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const autenticacionRutas = require('./rutas/autenticacionRutas');
const libroRutas = require('./rutas/libroRutas');

dotenv.config(); // Cargar variables de entorno

connectDB(); // Conectar a la base de datos

const app = express();
app.use(express.json());

app.use('/api/autenticacion', autenticacionRutas);
app.use('/api/libros', libroRutas);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
