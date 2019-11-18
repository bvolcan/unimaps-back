const bookshelf = require('../bookshelf')
const Floor = require('./Floor')
const Campus = require('./Campus')

module.exports = bookshelf.Model.extend({
  tableName: 'buildings',
  uuid: true,
  id: function () {
    return this.belongsTo(Campus)
  },
  floors: function () {
    return this.hasMany(Floor)
  }
})
