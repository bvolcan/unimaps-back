const express = require('express')
const router = express.Router()
const RoomController = require('../controllers/room-controller')
const Room = new RoomController()

router.get('/room', Room.showAll)
router.get('/room/:id', Room.show)
router.post('/room', Room.create)
router.put('/room/:id', Room.update)
router.delete('/room', Room.deleteAll)
router.delete('/room/:id', Room.deleteOne)

module.exports = router
