const bookshelf = require('../../bookshelf')
const Room_detail = require('./Room_detail')

module.exports = bookshelf.model.extend({
    table.name: 'floors',
    uuid: true,
    rooms: () => {
        this this.hasMany(Room_detail)
    }
})