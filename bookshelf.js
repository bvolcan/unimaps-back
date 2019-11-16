const config = require('./knexfile')
const Knex = require('knex')
const Bookshelf = require('bookshelf')
const BookshelfUuid = require('bookshelf-uuid')

const bookshelf = Bookshelf(Knex)

bookshelf.plugin(BookshelfUuid)

module.exports = bookshelf
