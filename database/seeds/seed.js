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
      number: '100',
      name: 'Direção CDTEC'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '101 A',
      name: 'Câmara de Ensino'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '101 A',
      name: 'PRG - Secretaria Pró-Reitoria de Graduação'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '101 B',
      name: 'PPGL'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '101 B',
      name: 'PRG - Gabinete Pró-Reitor'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '101 C',
      name: 'Chefias'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '101 D',
      name: 'Programa Escolas Inter-culturais Fronteira'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '101 E',
      name: 'N´úclero Redação e revisão de textos'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '102 A/B',
      name: 'Secretaria Pós-Graduação'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '102 C',
      name: 'Libras'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '103',
      name: 'Laboratório de Pesquisa'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '104',
      name: 'Diretório Acadêmico'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '105',
      name: 'Coordenação do Curso'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '106',
      name: 'Sala dos Professores'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '107',
      name: 'Colegiados CLC'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '108 A',
      name: 'Sala de Atendimento'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '108 B',
      name: 'Sala de Permanência'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '108 C',
      name: 'Produção e Redação'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '109A',
      name: 'Secretaria'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '109 B',
      name: 'Direção Adjunta'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '109 C',
      name: 'Direção'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '110 A',
      name: 'Sala de Aula'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '111',
      name: 'Sala Coordenação CRA'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '111',
      name: 'CRA - Núcleo de Registro de Diplomas de Graduação'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '111 A',
      name: 'Sala de Aula'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '112 A',
      name: 'Sala de Aula'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '113',
      name: 'Sala de Professor'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '114 A',
      name: 'Coordenação Curso de Português e Alemão'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '114 B',
      name: 'Suíte de Gravação'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '115',
      name: 'Gabinete Coordenação Curso de Letras'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '116',
      name: 'Gabinete e Laboratório de Letras'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '117',
      name: 'Sala de línguas'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '118',
      name: 'Gabinete e Laboratório de Letras Espanhol EAD'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '119',
      name: 'LAMPELL-Laboratório Multimídia de Pesquisa em Estudos da Linguageme Literatura'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '120',
      name: 'Modelagem e Maqueteria'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '120',
      name: 'Produção e Redação de Jornalismo'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '121',
      name: 'Laboratório de Geotecnologia'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '121',
      name: 'Sala de Professores'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '122 A',
      name: 'Estúdio de Gravação'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '122 B',
      name: 'Suíte de Gravação'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '122 C',
      name: 'Edição'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '122 D',
      name: 'Edição de vídeos'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '123',
      name: 'Almoxarifado'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '123 A',
      name: 'Estúdio de TV'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '123 A',
      name: 'Suíte Master'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '124 A',
      name: 'Sala de Reuniões'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '124 B',
      name: 'Equipamento Manutenção'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '125',
      name: 'Colegiado Engenharia Hídrica'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '127',
      name: 'Laboratório de Hidroquímica e Limnologia'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '128',
      name: 'Manejo de Bacias'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '129/130',
      name: 'Laboratório de Hídrometria. Hidráulica e Irrigação'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '131',
      name: 'Sala dos Professores'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '132',
      name: 'PPG Recursos Hídricos'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '132 B',
      name: 'Laboratório de Pesquisa e Materiais'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '132 B',
      name: 'Laboratório de Metais e Reciclagem'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '132 B',
      name: 'Sala de Apoio'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '132 B',
      name: 'Sala de Professores'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '132 B',
      name: 'Sala de Química'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '133',
      name: 'Recursos Hídricos'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '134',
      name: 'PPG Recursos Hídricos'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: '135',
      name: 'PET - Programa de Educação Tutorial'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'A101',
      name: 'Protocolo'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'A102',
      name: 'Secretaria CPED / UAB'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B134',
      name: 'Laboratório de Nanotecnologia - NOVONANO. Laboratório de Filmes Finos e Novos Materiais - LAFFIMAT'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B134',
      name: 'Almoxarifado'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B134',
      name: 'Análise Superficiais e Medidas Elétricas'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B134',
      name: 'Difratômetro'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B134',
      name: 'Laboratório de Analise e Síntese'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B134',
      name: 'Laboratório de Filmes Finos e Novos Materiais'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B134',
      name: 'MEV'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B134',
      name: 'Nanotecnologia e NOVONANO'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B134',
      name: 'Sala de Profesorres'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B136',
      name: 'Laboratório de Graduação'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B136',
      name: 'Laboratório CCAF'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B136',
      name: 'Sala de Apoio'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B136',
      name: 'Sala de Arquivo'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B136',
      name: 'Sala de Ensaios Mecânicos'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B136',
      name: 'Sala de Fornos'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B136',
      name: 'Gabinete'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B144 A',
      name: 'Secretaria'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B144 B',
      name: 'Sala de Reunião'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B144 C',
      name: 'Copa'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B145',
      name: 'Coordenação de Pós Graduação em PPGCEM'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B145 B',
      name: 'Coordenação de graduação'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B145 C',
      name: 'DA'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B145*',
      name: 'Laboratório de Materiais Polimétricos'
    },
    {
      id: uuidv4(),
      floor_id: knex('floors').where({ number: 1 }).select('id'),
      number: 'B146',
      name: 'Gabinete'
    }
  ])
}
