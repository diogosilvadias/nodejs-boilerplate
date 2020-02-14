const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'host.docker.internal',
  database: 'integratto21',
  password: 'postgres',
  port: 5432
})

module.exports = pool
