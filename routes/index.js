const express = require('express')
const router = express.Router()
const campus = require('./campus-router')
const building = require('./building-router')
const floor = require('./floor-router')
const room = require('./room-router')

router.use(campus)
router.use(building)
router.use(floor)
router.use(room)

module.exports = router
