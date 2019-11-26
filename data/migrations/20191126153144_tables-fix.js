exports.up = (knex, Promise) =>
  knex.schema
    .createTable('campus', (table) => {
      table.uuid('id').unique().primary().notNullable()
      table.string('name').notNullable()
      table.string('address').notNullable()
    })
    .createTable('buildings', (table) => {
      table.uuid('id').unique().primary().notNullable()
      table.uuid('campus_id')
      table.foreign('campus_id').references('id').inTable('campus')
      table.string('name').notNullable()
      table.string('reference')
    })
    .createTable('floors', (table) => {
      table.uuid('id').unique().primary().notNullable()
      table.uuid('building_id').notNullable()
      table.foreign('building_id').references('id').inTable('buildings')
      table.string('number').notNullable()
      table.integer('room_quantity').notNullable()
      table.string('map')
    })
    .createTable('room_details', (table) => {
      table.uuid('id').unique().primary().notNullable()
      table.uuid('floor_id').notNullable()
      table.foreign('floor_id').references('id').inTable('floors')
      table.string('number').notNullable()
      table.string('name')
      table.string('description')
    })
exports.down = (knex, Promise) =>
  knex.schema
    .dropTableIfExists('room_details')
    .dropTableIfExists('floors')
    .dropTableIfExists('buildings')
    .dropTableIfExists('campus')
