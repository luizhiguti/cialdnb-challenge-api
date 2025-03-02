<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<h2 align="center">
CIAL Dun & Bradstreet Technical Challenge
</h2>

### About

- DuckDuck Go search API proxy & query history management

- Developed using the NestJS framework

- Deployed to Vercel, check out the live application [here](https://cialdnb-challenge-api.vercel.app/swagger)
 

### Run local

- Project setup

```bash
$ npm install
```

- Build

```bash
$ npm run build
```

- Compile and run the project


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


- Envs (for local you probably don't need to setup)
```
The application uses 2 environment variables
  - PORT: application port
  - FILE_STORAGE_STRATEGY: 'VERCEL' | 'FILE_SYSTEM' (default)
    to handle local files on Vercel

```


Open [http://localhost:3000/swagger](http://localhost:3000/swagger) to see the available endpoints

### Technical Overview
This RESTful API, built with Nest.js, includes Swagger documentation for easy exploration and input validations to ensure data integrity. It acts as a proxy to the DuckDuckGo search API using the Nest.js Axios module for handling HTTP requests. The API also tracks and stores search query histories in a local file for future reference and analysis.
