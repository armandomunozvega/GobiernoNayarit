# Custom server base project (back for front)

### Tech

This project uses a number of open source projects to work properly:

* [NextJS] - The React Framework
* [MaterialUI] - React components for faster and easier development
* [Redux] - Centralize applications state and logic
* [Redux-Persist] - Persist data eve when the user reload the page
* [Prettier] - Code Formatter
* [ESLint] - Linter tool
* [Husky] - Prevent bad commit, push
* [Jest] - Testing Framework
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [yarn] - node package manager
* [npm] - node package manager

### Installation

This project requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd folder-project
$ npm install
$ npm run dev
```

For production environments...

```sh
$ npm install
$ npm run build
$ npm run start
```

### Environment variables

Development...

* [API_URL] - Context host
* [BACKEND_AUTH] - Fake login API - format PROTOCOL:#HOST#PORT (example: https:#example.com#443)

Test...

* [SONAR_SERVER_URL] - SonarQube host
* [SONAR_PROJECT_KEY] - SonarQube project identifier
* [SONAR_LOGIN] - SonarQube api_key

Upload generated code coverage and SonarQube report

```sh
$ npm run test
$ npm run sonar-scanner
```
