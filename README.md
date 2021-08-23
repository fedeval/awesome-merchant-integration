# Primer Merchant Integration

## How to use ##

### Environment variables ###

The repo includes and `env.example` file. Create a `.env`file in the root folder and copy the content from the `env.example` replacing the placeholder code with your API_KEY.


### Installing dependencies ###

After cloning the repo, all the project dependencies can be installed using npm:

```
npm install
```

### Development server ###

```
npm run start
```

will run the app on a dev server listening by default on port `4200`. Navigate to `http://localhost:4200/` to see the app and interact with it. The app will automatically reload if you change any of the source files. If you wish the dev server to listen on a different port edit the `ng serve` script with a `--port PORT_NUMBER` flag.

### Scripts ###

The following actions can be executed through npm or ng scripts:

#### Build ####

```
ng build
```

to build the project. The build artifacts will be stored in the `dist/` directory.

#### Running unit tests ####

```
ng test
```

to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Formatting ####

The code can be automatically formatted using prettier. The formatting options can be customised by editing the `.prettierrc`file.

```
npm run prettier
```

#### Linting ####

The code can ba automatically linted using ESlint. Note that ESlint will also use prettier to test for incorrect formatting. Rules, plugins and extensions for ESlint can be modified through the `.eslintrc` file.

```
npm run lint
```
---

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
