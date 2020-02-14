const ClientsService = require('../services/clients-service')

const controller = {}

controller.get = async (req, res) => {
  let { id } = req.params
  try {
    let row = await ClientsService.get(id)

    if (!row) {
      res.status(404).end()
    } else {
      res.status(200).json(row)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

controller.list = async (req, res) => {
  try {
    let rows = await ClientsService.list()

    res.status(200).json(rows)
  } catch (error) {
    res.status(500).json(error)
  }
}

controller.post = async (req, res) => {
  let client = req.body

  try {
    let id = await ClientsService.insert(client)
    res.status(201).json(id)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = controller
