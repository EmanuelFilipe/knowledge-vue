# knowledge

##  backend
npm start

## knex
usado para acessar o banco de dados postgres

## starting mongod
- acessing the path on therminal: C:\Program Files\MongoDB\Server\7.0\bin
execute: mongod

## create table
dentro de backend:

npx knex migrate:make create_table_users
npx knex migrate:latest
npx knex migrate:rollback

## caso aconteça erro de:
### TimeoutError: Knex: Timeout acquiring a connection. The pool is probably full. Are you missing a .transacting(trx)
npm install pg@latest --save