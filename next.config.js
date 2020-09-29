const path = require('path')
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  webpack: (config, { isServer, dev }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    if (dev) {
      config.devtool = 'cheap-module-source-map'
    }

    return config
  }
}
