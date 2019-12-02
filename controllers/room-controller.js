const Room = require('../database/models/RoomDetail')

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
        floor_id: req.body.floor_id,
        number: req.body.number,
        name: req.body.name,
        description: req.body.description
      })
      res.send('Created!')
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async update (req, res) {
    try {
      const room = await new Room()
      room.where({ id: req.params.id })
        .save({
          floor_id: req.body.floor_id,
          number: req.body.number,
          name: req.body.name,
          description: req.body.description
        },
        { patch: true })
      res.send('Updated!')
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async deleteAll (req, res) {
    try {
      const room = await new Room()
      const roomDelete = await room.fetchAll()
      roomDelete.invokeThen('destroy')
      res.send('All room deleted!!')
    } catch (error) {
      res.send('error' + error)
    }
  }

  async deleteOne (req, res) {
    try {
      const room = await new Room()
      room.where({ id: req.params.id }).destroy()
      res.send('Deleted!')
    } catch (error) {
      res.send('error' + error)
    }
  }
}
module.exports = Controller
