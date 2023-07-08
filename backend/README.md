# Como levantar el BE

## Levantar una base de datos localmente

Tener instalado docker localmente

- Correr estos 2 comandos

```bash
docker volume create db-challange

docker run -d -p 33060:3306 --name mysql-db-challenge -e MYSQL_ROOT_PASSWORD=123456 -v db-challange:/var/lib/mysql mysql
```

Usando Dbeaver o algun otro IDE de SQL conectarse a la db en el puerto 33060 y correr los siguientes scripts

```sql
create database challenge;

use challenge;

create user 'api-user'@'%' identified by '123456'; -- Creates the user

grant all on challenge.* to 'api-user'@'%'; -- Gives all privileges to the new user on the newly created database
```
