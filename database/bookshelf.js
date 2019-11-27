const knexfile = require('./knexfile')
const Knex = require('knex')
const Bookshelf = require('bookshelf')
const BookshelfUuid = require('bookshelf-uuid')

const env = process.env.NODE_ENV || 'development'

const knex = Knex(knexfile[env])
const bookshelf = Bookshelf(knex)

bookshelf.plugin(BookshelfUuid)

module.exports = bookshelf
