const Room = require('../data/models/RoomDetail')

class Controller {
  async showAll (req, res) {
    try {
      const room = await new Room()
      const roomShow = await room.fetchAll()
      res.json(roomShow)
    } catch (error) {
      console.log('Error: ' + error)
    }
  }

  async show (req, res) {
    try {
      const room = await new Room()
      const roomShow = await room.where({ id: req.params.id }).fetch()
      res.json(roomShow)
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async create (req, res) {
    try {
      const room = await new Room()
      room.save({
        number: await req.body.number,
        name: await req.body.name,
        // building_id: await req.body.building_id,
        description: await req.body.description
      })
        .then(res.send('Created!'))
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async update (req, res) {
    try {
      const room = await new Room()
      room.where({ id: req.params.id })
        .save({
          number: await req.body.number,
          name: await req.body.name,
          // building_id: await req.body.building_id,
          description: await req.body.description
        },
        { patch: true })
        .then(res.send('Updated!'))
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async deleteAll (req, res) {
    try {
      const room = await new Room()
      const roomDelete = await room.fetchAll()
      roomDelete.invokeThen('destroy')
        .then(res.send('All room deleted!!'))
    } catch (error) {
      res.send('error' + error)
    }
  }

  async deleteOne (req, res) {
    try {
      const room = await new Room()
      room.where({ id: req.params.id }).destroy()
        .then(res.send('Deleted!'))
    } catch (error) {
      res.send('error' + error)
    }
  }
}
module.exports = Controller
