# Command List

### 1. Install dependency libraries
> npm install

### 2. Start the web in dev mode
> npm start

### 3. Build application (production application)
> npm run build

Additional option
* `handy-web:basename`: set base name in case you want to deploy web app to subpath

For example:
`npm run build --handy-web:basename=/handy`: set base name to /handy

* `handy-web:autoapi`: set it to true if you want web app to automatically build apiBaseUrl `<http or https>://<IP or Host>:<Port>/api`

For example:

`npm run build --handy-web:autoapi=true`: auto detect api

`npm run build --handy-web:basename=/handy --handy-web:autoapi=true`: set basename and auto detect api

### 4. Start production web
> npm run start:prod

