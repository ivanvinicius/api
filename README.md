# Farm Budget back-end

Farm Budget back-end built in NodeJs and Typescript.

## Description

A back-end API built-in Typescript, using some concepts of Domain-Driven Design (DDD). This repo will be used to achieve my graduation as a web developer.

## How to run

1. Make sure you have `yarn` installed.
2. Make sure you have `PostgreSQL` database running.
3. The Database `DDL` can be found in `projectFolder/src/utils/database.sql`. Run the commands in your `database manager`.
4. Verify your connection info. To change the database  connection settings on API, go to file `projectFolder/ormconfig.json`.
5. Inside this project folder run the command `$ yarn` to download dependencies.
6. To run the project run the command `$ yarn dev:server`.

#### Obs.:
1. This project going to be integrated with `web` and `mobile` version in the future.
2. Typeorm `migrations` and `seeds` were not created in this project.


There's no license for this project yet.
