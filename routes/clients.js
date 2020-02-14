const router = require('express').Router()
const ClientsController = require('../controllers/clients-controller')

router.get('/', ClientsController.list)
router.get('/:id', ClientsController.get)
router.post('/', ClientsController.post)

module.exports = router
