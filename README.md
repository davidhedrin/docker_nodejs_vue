# Dockerizing Documentations
![Generic badge](https://img.shields.io/badge/Lumen.10-PHP.8-blue.svg) ![Generic badge](https://img.shields.io/badge/Node.js-Latest-green.svg) ![Generic badge](https://img.shields.io/badge/Express.js-Latest-green.svg) ![Generic badge](https://img.shields.io/badge/Vue-V.3-blue.svg) ![Generic badge](https://img.shields.io/badge/VITE-V.5-blue.svg) ![Generic badge](https://img.shields.io/badge/PosgreSQL-Latest-green.svg) ![Generic badge](https://img.shields.io/badge/Docker-V.*-red.svg)

This template make docker home using Node.js + Express.js for server and using Vue + Vite for Frontend and with image container PostgreSQL as database

### Requirement

- Download [Docker](https://docs.docker.com/) App 
- Download and Install [Node.js](https://nodejs.org/en/download) Machine (For Project Node)
- Download and Install [Composer](https://getcomposer.org/download/) Machine (For Project Lumen)

### Installation
1. **Vue + Vite Proejct (Client):**

Open terminal in Client folder path. Create project vue+vite as Client folder and add that **Dockerfile** insides.
```sh
# npm create vue@latest
```

#
2. **Node.js & Express.js (Server):**

Create project Node.js as Server folder and add that **Dockerfile** insides. Setup project config and make name your server file name (_Exp: server.js_).
```sh
# npm init
```

After finish setup server, install library express and nodemon.
```sh
# npm i express nodemon body-parser dotenv
# npm i pg // If using postgresql database
# npm i cors // For handle cors if using micro service frontend
```

**- Postgresql** configuration connection **Pool pg** file for database:
- Connection if node running with docker engine
```
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'postgres-db', // Use services name postgres
  port: 5432, // Use port postgre, Not alias
  database: 'e_constultation'
});
```

- Connection if node not running whitout docker engine
```
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost', // Using localhost host
  port: 5431, // Use port alias from docker postgres service port
  database: 'e_constultation'
});
```

#
3. **Lumen PHP (Server):**

Create project lumen and add thet **Dockerfile** file insides that folder project
```sh
# composer create-project --prefer-dist laravel/lumen blog
```
** The port for lumen in Dockerfile must [8000](https://lumen.laravel.com/docs/10.x#:~:text=Serving%20Your%20Application) ``` php -S localhost:8000 -t public ```. You can edit aliases that lumen container in dokcer-compose.yml
Example:
```
ports:
      - "8001:8000"                 # 8000 from images Dockerfile, 8001 is aliases
```

**- Postgresql** configuration connection **.env** file for database:
```
DB_CONNECTION=pgsql
DB_HOST=postgres-db // Using service name docker
DB_PORT=5432 // Use port postgre, Not alias
DB_DATABASE=msib_test
DB_USERNAME=postgres
DB_PASSWORD=postgres
```

### Script Run Docker
```sh
- docker-compose up                 # Script for run container and image with detail
- docker-comospe up -d              # Start docker witout detail
- docker-compose down               # Down all docker container run
- docker-compose image              # Show all running images
- docker-compose rm -f [CONTAINER NAME]
- docker-compose rmi -f [IMAGE NAME / IMAGE ID]
```
Use this steps for updating content vue becouse need to rebuild project after finish change:

**Using remove images, Need to download image again:
1. Remove that container using ``` docker-compose rm -f [CONTAINER NAME] ```
2. Remove that images vue using ``` docker-compose rmi -f [IMAGE NAME / IMAGE ID] ```
3. Run again ``` docker-compose up -d ``` to rebuild again vue project

**Not remove image, but clone as <none> and remove again (Recomended step):
1. Remove that container using ``` docker-compose rm -f [CONTAINER NAME] ```
2. Run again ``` docker-compose up -d --build [CONTAINER NAME] ``` to rebuild again vue project
3. Show all images to get images_id ``` docker-compose images ```
4. Remove image <none> Unused ``` docker rmi -f [IMAGES ID] ```
