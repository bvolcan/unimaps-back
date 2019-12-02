const Building = require('../database/models/Building')

class Controller {
  async showAll (req, res) {
    try {
      const building = await new Building()
      const buildingShow = await building.fetchAll()
      res.json(buildingShow)
    } catch (error) {
      console.log('Error: ' + error)
    }
  }

  async show (req, res) {
    try {
      const building = await new Building()
      const buildingShow = await building.where({ id: req.params.id }).fetch()
      res.json(buildingShow)
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async create (req, res) {
    try {
      const building = await new Building()
      building.save({
        campus_id: req.body.campus_id,
        name: req.body.name,
        reference: req.body.reference
      })
      res.json('Created!')
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async update (req, res) {
    try {
      const building = await new Building()
      building.where({ id: req.params.id })
        .save({
          campus_id: req.body.campus_id,
          name: req.body.name,
          reference: req.body.reference
        },
        { patch: true })
      res.send('Updated!')
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async deleteAll (req, res) {
    try {
      const building = await new Building()
      const buildingDelete = await building.fetchAll()
      buildingDelete.invokeThen('destroy')
      res.send('All building deleted!!')
    } catch (error) {
      res.send('error' + error)
    }
  }

  async deleteOne (req, res) {
    try {
      const building = await new Building()
      building.where({ id: req.params.id }).destroy()
      res.send('Deleted!')
    } catch (error) {
      res.send('error' + error)
    }
  }
}

module.exports = Controller
