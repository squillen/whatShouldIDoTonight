const tenants = {
  admin: {
    issuer: 'admin',
    roles: ['administrator'],
    secret: process.env.ADMIN_AUTH_TOKEN,
  },
}

module.exports = tenants
