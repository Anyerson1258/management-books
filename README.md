# Gestión de Libros API

## Descripción

API para la gestión de libros, permitiendo agregar, eliminar, actualizar y buscar libros. Además, cuenta con un sistema de autenticación para asegurar que solo usuarios autenticados puedan realizar ciertas operaciones.

## Requisitos

- Node.js
- MongoDB
- Postman: Para el uso de la API se utilizara POSTMAN, adjunto endpoints para poder utilizarlo.

## Endpoints

 ### Usuario
 POST:
 http://localhost:5002/api/autenticacion/registro
  POST:
 http://localhost:5002/api/autenticacion/ingreso
 
 ### Libro
 POST:
 http://localhost:5002/api/libros
 (Ingresar el key y value del usuario registrado)
 GET:
 http://localhost:5002/api/libros
 DELETE:
 http://localhost:5002/api/libros/:id
 PUT: 
 http://localhost:5002/api/libros/:id


## Instalación

1. Clona el repositorio
   ```bash
   git clone https://github.com/Anyerson1258/management-books.git
