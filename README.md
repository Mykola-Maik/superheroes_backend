[SuperheroAPI.json](https://github.com/user-attachments/files/17677133/SuperheroAPI.json)[SuperheroAPI.json](https://github.com/user-attachments/files/17677110/SuperheroAPI.json)## Technologies/libraries that were used:

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

You can import this collection to your Postman or Insomnia - [Uploadi{"_type":"export","__export_format":4,"__export_date":"2024-11-08T10:39:54.896Z","__export_source":"insomnia.desktop.app:v10.1.1","resources":[{"_id":"req_a907eee8ada64bf7a2b90e5f69f24a86","parentId":"wrk_d1b7ed82bf714bf3a0c54902edb9f90b","modified":1730740009332,"created":1730727789142,"url":"{{ _.URL }}/superheroes","name":"Get all superheroes","description":"","method":"GET","body":{},"parameters":[],"headers":[{"name":"User-Agent","value":"insomnia/10.1.1"}],"authentication":{},"metaSortKey":-1730727789142,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"wrk_d1b7ed82bf714bf3a0c54902edb9f90b","parentId":null,"modified":1730727555898,"created":1730727555898,"name":"JSNinjas Superhero App","description":"","scope":"collection","_type":"workspace"},{"_id":"req_72f074c560344ca2937c91c23f94c451","parentId":"wrk_d1b7ed82bf714bf3a0c54902edb9f90b","modified":1730740014074,"created":1730730420874,"url":"{{ _.URL }}/superheroes/10","name":"Get superhero","description":"","method":"GET","body":{},"parameters":[],"headers":[{"name":"User-Agent","value":"insomnia/10.1.1"}],"authentication":{},"metaSortKey":-1730513793370,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_2426d9e6aadc4493b131c1d24eedc67b","parentId":"wrk_d1b7ed82bf714bf3a0c54902edb9f90b","modified":1730740016628,"created":1730730453461,"url":"{{ _.URL }}/superheroes","name":"Create superhero","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n    \"nickname\": \"Test1\",\n    \"real_name\": \"Test1\",\n    \"origin_description\": \"Test1\",\n    \"superpowers\": \"Test1\",\n    \"catch_phrase\": \"Test1\",\n    \"images\": []\n  }"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/10.1.1"}],"authentication":{},"metaSortKey":-1730406795484,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_4df65bc0624f4286b7c6038e362b9f0e","parentId":"wrk_d1b7ed82bf714bf3a0c54902edb9f90b","modified":1730740019657,"created":1730730468277,"url":"{{ _.URL }}/superheroes/2","name":"Update superhero","description":"","method":"PATCH","body":{"mimeType":"application/json","text":"{\n\t\"nickname\": \"Batman\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/10.1.1"}],"authentication":{},"metaSortKey":-1730353296541,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_ffae1bfb2f084173894f375ed4f0ce50","parentId":"wrk_d1b7ed82bf714bf3a0c54902edb9f90b","modified":1730740022419,"created":1730730482539,"url":"{{ _.URL }}/superheroes/1","name":"Delete superhero","description":"","method":"DELETE","body":{},"parameters":[],"headers":[{"name":"User-Agent","value":"insomnia/10.1.1"}],"authentication":{},"metaSortKey":-1730326547069.5,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"env_935c33fa21ec39fc4767ea977b9dea7892c0ace6","parentId":"wrk_d1b7ed82bf714bf3a0c54902edb9f90b","modified":1730727783422,"created":1730727555900,"name":"Base Environment","data":{"URL":"http://localhost:4000"},"dataPropertyOrder":{"&":["URL"]},"color":null,"isPrivate":false,"metaSortKey":1730727555900,"_type":"environment"},{"_id":"jar_935c33fa21ec39fc4767ea977b9dea7892c0ace6","parentId":"wrk_d1b7ed82bf714bf3a0c54902edb9f90b","modified":1730727555901,"created":1730727555901,"name":"Default Jar","cookies":[],"_type":"cookie_jar"}]}ng SuperheroAPI.json…]()


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
