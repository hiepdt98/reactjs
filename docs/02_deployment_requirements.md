# Deployment Requirements

## 1. Configuration file

### Project configuration

Project configuration is put in file PROJECT_FOLDER/app/config/config.json
```json
{
  "BASE_URL": "http://ec2-54-199-167-210.ap-northeast-1.compute.amazonaws.com/api",
  "API_TIMEOUT": 10000,
  "DEFAULT_LOCALE": "en",
  "LOCALES": [
    "en",
    "ja"
  ],
  "LOCALE_MAP": {
    "en": "en_US",
    "ja": "ja_JP"
  }
}
```

We can change value of BASE_URL, API TIMEOUT, ...

### Build configuration

The configuration for each type of build (development or production) is put in folder PROJECT_FOLDER/webpack

* `webpack.base.js` - common configuration for both types (developement or production)
* `webpack.dev.js` - specific configuration for development build
* `webpack.prod.js` - specific configuration for production build


## 2. Deployment server
The build folder can be deployed to any static web server (such as: apache, nodejs server, ...)
