# Project Structure

```
/app
    /components   : contains React components that not connected to redux
    /config       : contains project configuration
    /constants    : contains constant classes
    /containers   : contains React components that are connected to redux
    /fake-data    : contains fake json response
    /i18n         : config for i18n
    /images       : contains images (that we want to import using webpack)
    /redux        : contains redux related things
    /sagas        : contains saga related things
    /services     : contains service classes
    /shared       : contain independent module that can be shared between many projects
    /styles       : contains style less
    /utils        : contains utility classes
    index.html    : base index file
    index.js      : bootstrap file
    routes.js     : mapping between url and component
/docs: contains docs
/webpack: webpack configuration
server.js: built-in server for dev and production
```
