const express = require('express')
// const router = express.Router()
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Campus
const CampusController = require('./controller/campus-controller')
const Campus = new CampusController()

app.get('/campus', Campus.showAll)
app.get('/campus/:id', Campus.show)
app.post('/campus', Campus.create)
app.put('/campus/:id', Campus.update)
app.delete('/campus', Campus.deleteAll)
app.delete('/campus/:id', Campus.deleteOne)

// Building
const BuildingController = require('./controller/building-controller')
const Building = new BuildingController()

app.get('/building', Building.showAll)
app.get('/building/:id', Building.show)
app.post('/building', Building.create)
app.put('/building/:id', Building.update)
app.delete('/building', Building.deleteAll)
app.delete('/building/:id', Building.deleteOne)

// Floor
const FloorController = require('./controller/floor-controller')
const Floor = new FloorController()

app.get('/floor', Floor.showAll)
app.get('/floor/:id', Floor.show)
app.post('/floor', Floor.create)
app.put('/floor/:id', Floor.update)
app.delete('/floor', Floor.deleteAll)
app.delete('/floor/:id', Floor.deleteOne)

// RoomDescription
const RoomController = require('./controller/room-controller')
const Room = new RoomController()

app.get('/room', Room.showAll)
app.get('/room/:id', Room.show)
app.post('/room', Room.create)
app.put('/room/:id', Room.update)
app.delete('/room', Room.deleteAll)
app.delete('/room/:id', Room.deleteOne)

app.get('/', (req, res) => res.send('working!'))

app.listen(4000, () => { console.log('Running!') })
