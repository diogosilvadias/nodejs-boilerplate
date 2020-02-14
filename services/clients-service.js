const db = require('../database/db')

const service = {}

service.get = async id => {
  const res = await db.query(
    'select id, pessoa, nomefantasia from ns.pessoas where id = $1',
    [id]
  )
  return res.rowCount > 0 ? res.rows[0] : null
}

service.list = async () => {
  const { rows } = await db.query(
    'select id, pessoa, nomefantasia from ns.pessoas order by pessoa'
  )
  return rows
}

service.insert = async (client) => {
  const { rows } = await db.query(
    'INSERT INTO ns.pessoas(pessoa, nomefantasia) VALUES($1, $2) RETURNING id',
    [client.pessoa, client.nome]
  )
  return rows[0]
}

module.exports = service
