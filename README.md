
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


Luego de iniciar el servidor es necesario crear un usuario admin para poder
crear las preguntas y respuestas, para esto se debe hacer una petición POST a la ruta
http://localhost:4001/api/v1/user/api/v1/user/create pueden ver de forma mas detallada
accediendo a la documentación de la api en http://localhost:4001/docs/index.html#/


