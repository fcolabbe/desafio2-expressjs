# Mi Repertorio

## Descripción

"Mi Repertorio" es una aplicación CRUD desarrollada para la escuela de música "E-Sueño". Permite a los estudiantes gestionar su repertorio de canciones para presentaciones en vivo. Este proyecto consiste en un servidor backend construido con Express.js que maneja el almacenamiento y manipulación de datos utilizando un archivo JSON local.

## Características

- Agregar nuevas canciones al repertorio
- Ver todas las canciones del repertorio
- Editar canciones existentes
- Eliminar canciones del repertorio

## Tecnologías Utilizadas

- Node.js
- Express.js
- Módulo File System

## Endpoints de la API

- `POST /canciones`: Agregar una nueva canción al repertorio
- `GET /canciones`: Obtener todas las canciones del repertorio
- `PUT /canciones/:id`: Actualizar una canción específica por ID
- `DELETE /canciones/:id`: Eliminar una canción del repertorio por ID

## Instalación

1. Clona este repositorio
2. Navega al directorio del proyecto
3. Instala las dependencias:

    npm install

4. Inicia el servidor:
   
    npm start

## Uso

Este servidor backend está diseñado para trabajar con una aplicación frontend pre-construida. Asegúrate de que tu aplicación del lado del cliente esté configurada para interactuar con estos endpoints de la API.

http://localhost:3000/ 

![alt text](<Screenshot 2024-06-23 at 22.33.24.png>)

## Almacenamiento de Datos

Los datos de las canciones se almacenan localmente en un archivo JSON llamado `repertorio.json`.

## Contribuciones

Este proyecto fue desarrollado como parte de un desafío para "Desafío Latam". Las contribuciones, problemas y solicitudes de funcionalidades son bienvenidas.
