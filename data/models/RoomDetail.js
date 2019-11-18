const bookshelf = require('../bookshelf')
const Floor = require('./Floor')

module.exports = bookshelf.module.extend({
  tableName: 'room_datails',
  uuid: true,
  id: function () {
    return this.belongsTo(Floor)
  }
})
