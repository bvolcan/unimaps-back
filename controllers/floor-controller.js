const Floor = require('../database/models/Floor')

class Controller {
  async showAll (req, res) {
    try {
      const floor = await new Floor()
      const floorShow = await floor.fetchAll()
      res.json(floorShow)
    } catch (error) {
      console.log('Error: ' + error)
    }
  }

  async show (req, res) {
    try {
      const floor = await new Floor()
      const floorShow = await floor.where({ id: req.params.id }).fetch()
      res.json(floorShow)
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async create (req, res) {
    try {
      const floor = await new Floor()
      floor.save({
        building_id: req.body.building_id,
        number: req.body.number,
        room_quantity: req.body.room_quantity,
        map: req.body.map
      })
      res.send('Created!')
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async update (req, res) {
    try {
      const floor = await new Floor()
      floor.where({ id: req.params.id })
        .save({
          building_id: req.body.building_id,
          number: req.body.number,
          room_quantity: req.body.room_quantity,
          map: req.body.map
        },
        { patch: true })
      res.send('Updated!')
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async deleteAll (req, res) {
    try {
      const floor = await new Floor()
      const floorDelete = await floor.fetchAll()
      floorDelete.invokeThen('destroy')
      res.send('All floor deleted!!')
    } catch (error) {
      res.send('error' + error)
    }
  }

  async deleteOne (req, res) {
    try {
      const floor = await new Floor()
      floor.where({ id: req.params.id }).destroy()
      res.send('Deleted!')
    } catch (error) {
      res.send('error' + error)
    }
  }
}
module.exports = Controller
