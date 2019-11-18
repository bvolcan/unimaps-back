const bookshelf = require('../bookshelf')
const Building = require('./Building')

module.exports = bookshelf.module.extend({
  tableName: 'campus',
  uuid: true,
  buildings: function () {
    return this.hasMany(Building)
  }
})
