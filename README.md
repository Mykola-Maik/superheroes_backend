[SuperheroAPI.json](https://github.com/user-attachments/files/17677110/SuperheroAPI.json)## Technologies/libraries that were used:

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

You can import this collection to your Postman or Insomnia - [Uploading SuperheroAPI.json…]()

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
