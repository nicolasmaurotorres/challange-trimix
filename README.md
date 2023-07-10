## Requisitos

- Docker Desktop
- maven 3.9.3
- node 18.8.0
- npm i -g @ionic/cli

# Como levantar el backend

tenemos que crear una base de datos en mysql, corriendo los siguientes comandos:
`docker volume create db-challange`
`docker run -d -p 3306:3306 --name mysql-db-challenge -e MYSQL_ROOT_PASSWORD=123456 -v db-challange:/var/lib/mysql mysql`

Levantar el proyecto con VSCODE usando los pluging:

- vmware.vscode-boot-dev-pack
- vscjava.vscode-java-pack

y luego apretar F5 para levantarlo

# Como levantar el frontend

correr el comando
`npm i -g @ionic/cli`
`npm i`

correr el comando
`npm start`
