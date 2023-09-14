# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Para que las canciones se muestren  tienes que generar un token, tienes que hacer peticion POST con esta url en postman
https://accounts.spotify.com/api/token
Con las siguientes propiedades
grant_type: client_credentials
client_id: 42ad9698deb147a49f8919ab5f1270c6
client_secret: 3938fce9a557444982c4b3cdfa953742

Esto devolvera un objeto con un token, el token lo copias y lo pegas en el servicio spotify.service.ts


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
