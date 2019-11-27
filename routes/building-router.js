const express = require('express')
const router = express.Router()
const BuildingController = require('../controllers/building-controller')
const Building = new BuildingController()

router.get('/building', Building.showAll)
router.get('/building/:id', Building.show)
router.post('/building', Building.create)
router.put('/building/:id', Building.update)
router.delete('/building', Building.deleteAll)
router.delete('/building/:id', Building.deleteOne)

module.exports = router
