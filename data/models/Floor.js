const bookshelf = require('../bookshelf')
const RoomDetail = require('./RoomDetail')
const Building = require('./Building')

module.exports = bookshelf.model.extend({
  tableName: 'floors',
  uuid: true,
  id: function () {
    return this.belongsTo(Building)
  },
  rooms: function () {
    return this.hasMany(RoomDetail)
  }
})
