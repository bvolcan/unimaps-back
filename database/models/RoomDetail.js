const bookshelf = require('../bookshelf')
const Floor = require('./Floor')

module.exports = bookshelf.Model.extend({
  tableName: 'room_details',
  uuid: true,
  floor_id: function () {
    return this.belongsTo(Floor)
  }
})
