const express = require('express')
const router = express.Router()
const CampusController = require('../controllers/campus-controller')
const Campus = new CampusController()

router.get('/campus', Campus.showAll)
router.get('/campus/:id', Campus.show)
router.post('/campus', Campus.create)
router.put('/campus/:id', Campus.update)
router.delete('/campus', Campus.deleteAll)
router.delete('/campus/:id', Campus.deleteOne)

module.exports = router
