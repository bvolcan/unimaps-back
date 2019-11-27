const express = require('express')
const router = express.Router()
const FloorController = require('../controllers/floor-controller')
const Floor = new FloorController()

router.get('/floor', Floor.showAll)
router.get('/floor/:id', Floor.show)
router.post('/floor', Floor.create)
router.put('/floor/:id', Floor.update)
router.delete('/floor', Floor.deleteAll)
router.delete('/floor/:id', Floor.deleteOne)

module.exports = router
