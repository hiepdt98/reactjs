/**
 * @author Nam NH
 * Config loader
 */

const config = require('./config.json')

if (process.env.AUTOAPI === 'true') {
  config.BASE_URL = window.location.origin + '/api'
}

export default config
