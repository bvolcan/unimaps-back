const Building = require('../data/models/Building')

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
        name: req.body.name,
        // building_id: await req.body.building_id,
        reference: req.body.reference
      })
        .then(res.send('Created!'))
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async update (req, res) {
    try {
      const building = await new Building()
      building.where({ id: req.params.id })
        .save({
          name: req.body.name,
          // building_id: await req.body.building_id,
          reference: req.body.reference
        },
        { patch: true })
    } catch (error) {
      res.send('Error: ' + error)
    }
    res.send('Updated!')
  }

  async deleteAll (req, res) {
    try {
      const building = await new Building()
      const buildingDelete = await building.fetchAll()
      buildingDelete.invokeThen('destroy')
    } catch (error) {
      res.send('error' + error)
    }
    res.send('All building deleted!!')
  }

  async deleteOne (req, res) {
    try {
      const building = await new Building()
      building.where({ id: req.params.id }).destroy()
    } catch (error) {
      res.send('error' + error)
    }
    res.send('Deleted!')
  }
}

module.exports = Controller
