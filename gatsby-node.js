const path = require('path')

/**
 * Set up absolute imports - any import path is first assumed to come from 'src'
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
