const bookshelf = require('../bookshelf')
const RoomDetail = require('./RoomDetail')
const Building = require('./Building')

module.exports = bookshelf.Model.extend({
  tableName: 'floors',
  uuid: true,
  building_id: function () {
    return this.belongsTo(Building)
  },
  rooms: function () {
    return this.hasMany(RoomDetail)
  }
})
