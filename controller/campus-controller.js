const Campus = require('../data/models/Campus')

class Controller {
  async showAll (req, res) {
    try {
      const campus = await new Campus()
      const campusShow = await campus.fetchAll()
      res.json(campusShow)
    } catch (error) {
      console.log('Error: ' + error)
    }
  }

  async show (req, res) {
    try {
      const campus = await new Campus()
      const campusShow = await campus.where({ id: req.params.id }).fetch()
      res.json(campusShow)
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async create (req, res) {
    try {
      const campus = await new Campus()
      campus.save({
        name: await req.body.name,
        // building_id: await req.body.building_id,
        address: await req.body.address
      })
        .then(res.send('Created!'))
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async update (req, res) {
    try {
      const campus = await new Campus()
      campus.where({ id: req.params.id })
        .save({
          name: await req.body.name,
          // building_id: await req.body.building_id,
          address: await req.body.address
        },
        { patch: true })
        .then(res.send('Updated!'))
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async deleteAll (req, res) {
    try {
      const campus = await new Campus()
      const campusDelete = await campus.fetchAll()
      campusDelete.invokeThen('destroy')
        .then(res.send('All Campus deleted!!'))
    } catch (error) {
      res.send('error' + error)
    }
  }

  async deleteOne (req, res) {
    try {
      const campus = await new Campus()
      campus.where({ id: req.params.id }).destroy()
        .then(res.send('Deleted!'))
    } catch (error) {
      res.send('error' + error)
    }
  }
}
module.exports = Controller
