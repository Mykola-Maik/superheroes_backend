## Technologies/libraries that were used:

- Nest.js;
- Postgresql;
- TypeORM;
- Tested locally with Insomnia;

## Available endpoints:

- Get superheroes (GET) - /superheroes;
- Get superhero by id (GET) - /superheroes/${superheroId};
- Create superhero (POST) - /superheroes;
- Update superhero (PATCH) - /superheroes/${superheroId};
- Delete superhero (DELETE) - /superheroes/${superheroId};

❓ Optionally when you getting all superheroes, you can pass `?page=1&limit=5`

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
