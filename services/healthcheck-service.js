const db = require('../database/db')

const service = {}

service.status = async () => {
  return Promise.resolve({ status: 'ok' })
}

service.ok = async value => {
  return new Promise((resolve, reject) => {
    if (value > 10) {
      resolve(true)
    } else {
      reject(false)
    }
  })
}

service.query = async id => {
  return new Promise((resolve, reject) => {
    db.query(
      'select id, pessoa, nomefantasia from ns.pessoas where id = $1',
      [id],
      (err, res) => {
        if (err) {
          reject(err)
          return
        }

        let row = {}
        if (res.rowCount > 0) row = res.rows[0]

        resolve(row)
      }
    )
  })
}

module.exports = service
