const router = require('express').Router()
const HealthcheckRoutes = require('./healthcheck')
const ClientsRoutes = require('./clients')

router.use('/healthcheck', HealthcheckRoutes)
router.use('/clients', ClientsRoutes)

module.exports = router
