const bookshelf = require('../../bookshelf')
const Floor = require('./Floor')

module.exports = bookshelf.Model.extend({
    table.name: 'buildings',
    uuid: true,
    floors: () => {
        return this.hasMany(Floor)
    }
})