# Simple Login

Este proyecto es una aplicación web simple de inicio de sesión construida con Node.js, Express y MySQL.

## Características
- Registro y autenticación de usuarios
- Gestión de sesiones
- Interfaz web sencilla
- Uso de base de datos MySQL para almacenar usuarios

## Estructura del proyecto
- `server.js`: Archivo principal del servidor
- `routes/`: Rutas de la aplicación (autenticación, inicio, registro, etc.)
- `views/`: Vistas EJS para renderizar páginas HTML
- `public/`: Archivos estáticos (HTML, CSS, JS)
- `database/`: Configuración y conexión a la base de datos
- `docker-compose.yml`: Configuración para levantar el entorno con Docker

## Requisitos
- Node.js
- npm
- MySQL
- Docker (opcional)

## Instalación
1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd simple-login
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura la base de datos MySQL (puedes usar Docker con el archivo `docker-compose.yml`).
4. Crea un archivo `.env` con tus variables de entorno necesarias.
5. Inicia la aplicación:
   ```bash
   npm start
   ```

## Uso
- Accede a `http://localhost:3000` en tu navegador para ver la aplicación.

## Licencia
Este proyecto está bajo la licencia MIT.
