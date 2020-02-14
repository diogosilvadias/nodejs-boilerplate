const router = require('express').Router()
const HealthCheckController = require('../controllers/healthcheck-controller')

// Prefix: /healthcheck
router.get('/', HealthCheckController.status)
router.get('/ok', HealthCheckController.ok)
router.get('/query', HealthCheckController.query)

module.exports = router
