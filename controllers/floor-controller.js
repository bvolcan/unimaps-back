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
        number: await req.body.number,
        // building_id: await req.body.building_id,
        room_quantity: await req.body.room_quantity
      })
        .then(res.send('Created!'))
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async update (req, res) {
    try {
      const floor = await new Floor()
      floor.where({ id: req.params.id })
        .save({
          number: await req.body.number,
          // building_id: await req.body.building_id,
          room_quantity: await req.body.room_quantity
        },
        { patch: true })
        .then(res.send('Updated!'))
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async deleteAll (req, res) {
    try {
      const floor = await new F()
      const floorDelete = await floor.fetchAll()
      floorDelete.invokeThen('destroy')
        .then(res.send('All floor deleted!!'))
    } catch (error) {
      res.send('error' + error)
    }
  }

  async deleteOne (req, res) {
    try {
      const floor = await new Floor()
      floor.where({ id: req.params.id }).destroy()
        .then(res.send('Deleted!'))
    } catch (error) {
      res.send('error' + error)
    }
  }
}
module.exports = Controller
