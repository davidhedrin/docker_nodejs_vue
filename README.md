# Docker Home Node.js
![Generic badge](https://img.shields.io/badge/Node.js-Latest-green.svg) ![Generic badge](https://img.shields.io/badge/Express.js-Latest-green.svg) ![Generic badge](https://img.shields.io/badge/Vue-V.3-blue.svg) ![Generic badge](https://img.shields.io/badge/VITE-V.5-blue.svg) ![Generic badge](https://img.shields.io/badge/PosgreSQL-Latest-green.svg) ![Generic badge](https://img.shields.io/badge/Docker-V.*-red.svg)

This template make docker home using Node.js + Express.js for server and using Vue + Vite for Frontend and with image container PostgreSQL as database

### Requirement

- Download [Docker](https://docs.docker.com/) App 
- Download and Install [Node.js](https://nodejs.org/en/download) Machine

### Installation
Open terminal in Client folder path. Create project vue+vite as Client folder and add that Dockerfile insides.
```sh
# npm create vue@latest
```
Create project Node.js as Server folder and add that Dockerfile insides. Setup project config and make name your server file name (_Exp: server.js_).
```sh
# npm init
```
After finish setup server, install library express and nodemon.
```sh
# npm i express nodemon
```

### Structure Folder Project Look
```
├── docker-compose.yml
└── www
    └── client/                 # Project vue+vite here
        ├── Dockerfile
    └── server/                 # Project node.js and express here
        ├── Dockerfile
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