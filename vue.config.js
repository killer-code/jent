const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  runtimeCompiler: true,
  filenameHashing: false,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, './dist'),
        routes: [ '/', '/instruction', '/how-it-works', '/webar' ],
      })
    ]
  }
}