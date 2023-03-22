
# ApiDePreguntas

En este projecto se crea una Api la cual tiene un sistema de autenticación y permite crear preguntas y respuestas por el admin para que luego el usuario pueda responder esta que son de selección multple por pregunta


## Run Locally

Clone the project

```bash
  git clone https://github.com/dasayo/ApiDePreguntas.git
```

Go to the project directory

```bash
  cd ApiDePreguntas
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Ahora es necesario crear una base de datos en postgresql y agregar las credenciales en el
el archivo .env que se encuentra en la raiz del proyecto, para esto se debe crear un archivo
con el nombre .env y usadon el archivo .env.example como referencia agregar las credenciales
de la base de datos.

Luego de crear la base de datos es necesario crear las tablas, para esto se debe ejecutar el
siguiente comando

```bash
  node ace migration:run
```


Luego de iniciar el servidor es necesario crear un usuario admin para poder
crear las preguntas y respuestas, para esto se debe hacer una petición POST a la ruta
http://localhost:4001/api/v1/user/api/v1/user/create pueden ver de forma mas detallada
accediendo a la documentación de la api en http://localhost:4001/docs/index.html#/

## unit test

Para poder ejecutar los test unitarios primero es importante 

```bash
  npm run test
```
