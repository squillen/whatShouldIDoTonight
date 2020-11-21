const tenants = {
  admin: {
    issuer: 'admin',
    roles: ['administrator'],
    secret: process.env.ADMIN_AUTH_SECRET,
  },
}

module.exports = tenants
