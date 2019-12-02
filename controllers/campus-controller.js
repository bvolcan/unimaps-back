const Campus = require('../database/models/Campus')

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
        name: req.body.name,
        address: req.body.address
      })
      res.send('Created!')
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
          address: await req.body.address
        },
        { patch: true })
      res.send('Updated!')
    } catch (error) {
      res.send('Error: ' + error)
    }
  }

  async deleteAll (req, res) {
    try {
      const campus = await new Campus()
      const campusDelete = await campus.fetchAll()
      await campusDelete.invokeThen('destroy')
      res.send('All Campus deleted!!')
    } catch (error) {
      res.send('error' + error)
    }
  }

  async deleteOne (req, res) {
    try {
      const campus = await new Campus()
      campus.where({ id: req.params.id }).destroy()
      res.send('Deleted!')
    } catch (error) {
      res.send('error' + error)
    }
  }
}
module.exports = Controller
