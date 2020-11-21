module.exports = {
  webpack: (config, { isServer, dev }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    if (dev) {
      config.devtool = 'cheap-module-source-map'
    }

    return config
  },
  env: {
    GOOGLE_ANALYTICS_ID: 'UA-178010695-1',
    MONGODB_URI: 'mongodb+srv://admin:LucyB3lug4@whatshouldidotonight.33ano.mongodb.net/test?retryWrites=true&w=majority',
    MONGODB_DB: 'production',
    SITE_URI: 'http://localhost:3000',
    RAPID_API_KEY: '7cb4e7ac99mshd4d19d0e60b6de5p13eb8fjsn46e8a7dfcf1f',
    ADMIN_AUTH_SECRET: 'C@PT@!N_p4rty_PANT$!',
  },
}
