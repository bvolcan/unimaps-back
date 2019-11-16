exports.up = (knex, Promise) =>
  knex.schema
    .createTable('room_details', (table) => {
      table.uuid('id').unique().primary().notNullable()
      table.string('number').notNullable()
      table.string('name')
      table.string('description').notNullable()
    })
    .createTable('floors', (table) => {
      table.uuid('id').unique().primary().notNullable()
      table.string('number').notNullable()
      table.integer('room_quantity').notNullable()
      table.uuid('room_id')
      table.foreign('room_id').references('id').inTable('room_details')
      // table.string('map').notNullable()
    })
    .createTable('buildings', (table) => {
      table.uuid('id').unique().primary().notNullable()
      table.string('name').notNullable()
      table.uuid('floor_id')
      table.foreign('floor_id').references('id').inTable('floors')
      table.string('reference')
    })
    .createTable('campus', (table) => {
      table.uuid('id').unique().primary().notNullable()
      table.string('name').notNullable()
      table.uuid('building_id')
      table.foreign('building_id').references('id').inTable('buildings')
      table.string('address').notNullable()
    })
exports.down = (knex, Promise) =>
  knex.schema
    .dropTableIfExists('campus')
    .dropTableIfExists('buildings')
    .dropTableIfExists('floors')
    .dropTableIfExists('room_details')
