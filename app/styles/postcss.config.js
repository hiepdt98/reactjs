module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-flexbugs-fixes'),
    require('precss'),
    require('autoprefixer')({
      browsers:
        '> 1%, last 200 versions, ie 10, ie 6-8, maintained node versions, not dead'
    })
  ]
}
