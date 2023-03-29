

# Sistema de calificaciones

Este proyecto es una API que permite responder formularios de selección múltiple y guardarlos en la base de datos.

## Descripción

El Sistema de calificaciones es una API desarrollada en AdonisJS y Typescript que permite responder formularios de selección múltiple y almacenar los resultados en una base de datos PostgreSQL. La API también incluye documentación en Swagger para facilitar su uso y comprensión.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado Node.js y PostgreSQL en tu equipo.

## Instalación

1. Clona el repositorio en tu equipo.

   ```sh
   git clone https://github.com/dasayo/ApiDePreguntas.git
2. Accede al directorio del proyecto y ejecuta:

    ```sh
    npm i

para instalar todas las dependencias necesarias.

3. Configura la conexión a la base de datos modificando el archivo .env con tus credenciales de PostgreSQL.

4. Ejecuta las migraciones de la base de datos para crear las tablas necesarias.
    ```sh
    node ace migration:run

5. Inicia el servidor de desarrollo con el comando:
    ```sh
    npm run dev

La aplicación estará disponible en http://localhost:4001.

# Uso
Para obtener más detalles sobre cómo utilizar esta API, consulte la documentación incluida en el proyecto, que se puede encontrar en http://localhost:3333/docs.



# Contribuciones
Las contribuciones son bienvenidas y apreciadas. Para contribuir, sigue estos pasos:

Haz un fork del repositorio.
Crea una rama con la nueva funcionalidad o corrección de errores.
Realiza los cambios necesarios y realiza las pruebas.
Envía una solicitud de extracción (pull request) a la rama principal del repositorio.

# Licencia
Este proyecto está disponible bajo la licencia MIT.
