const HealthCheckService = require('../services/healthcheck-service')

const controller = {}

controller.status = async (req, res) => {
  const status = await HealthCheckService.status()
  res.status(200).json(status)
}

controller.ok = async (req, res) => {
  try {
    const { value } = req.query

    const status = await HealthCheckService.ok(value)
    res.status(200).json(status)
  } catch (error) {
    res.status(500).json(error)
  }
}

controller.query = async (req, res) => {
  const { id } = req.query

  try {
    const row = await HealthCheckService.query(id)
    res.status(200).json(row)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = controller
