const uuidv4 = require('uuid/v4')

exports.seed = async (knex, Promise) => {
  await knex('room_details').del()
  await knex('floors').del()
  await knex('buildings').del()
  await knex('campus').del()

  await knex('campus').insert([
    {
      id: uuidv4(),
      name: 'Anglo',
      address: 'R. Gomes Carneiro, 1'
    }
  ])

  await knex('buildings').insert([
    {
      id: uuidv4(),
      campus_id: knex('campus').where({ name: 'Anglo' }).select('id'),
      name: 'Delfim Mendes Silveira',
      reference: 'Prédio central'
    }
  ])

  await knex('floors').insert([
    {
      id: uuidv4(),
      building_id: knex('buildings').where({ name: 'Delfim Mendes Silveira' }).select('id'),
      number: 1,
      room_quantity: 81
    },
    {
      id: uuidv4(),
      building_id: knex('buildings').where({ name: 'Delfim Mendes Silveira' }).select('id'),
      number: 2,
      room_quantity: 0
    },
    {
      id: uuidv4(),
      building_id: knex('buildings').where({ name: 'Delfim Mendes Silveira' }).select('id'),
      number: 3,
      room_quantity: 0
    },
    {
      id: uuidv4(),
      building_id: knex('buildings').where({ name: 'Delfim Mendes Silveira' }).select('id'),
      number: 4,
      room_quantity: 0
    }
  ])

  await knex('room_details').insert([
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 0,
      name: 'teste'
    }
  ])
}
