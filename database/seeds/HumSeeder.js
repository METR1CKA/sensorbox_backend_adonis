'use strict'

/*
|--------------------------------------------------------------------------
| HumSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class HumSeeder {
  static async run () {
    await Database.table('humedads').insert([
      { 
        id: 1, 
        Valor: '39',
        created_at:'2022-04-16 15:32:45'

      },
      {
        id: 2, 
        Valor: '40',
        created_at:'2022-04-16 15:32:50'

      },
      {
        id: 3, 
        Valor: '45',
        created_at:'2022-04-16 15:32:55'
      },
      { 
        id: 4, 
        Valor: '27',
        created_at:'2022-04-16 15:33:45'

      },
      {
        id: 5, 
        Valor: '33',
        created_at:'2022-04-16 15:33:50'

      },
      {
        id: 6, 
        Valor: '24',
        created_at:'2022-04-16 15:33:55'
      },
      {
        id: 7, 
        Valor: '56',
        created_at:'2022-04-16 15:34:55'
      },
      { 
        id: 8, 
        Valor: '53',
        created_at:'2022-04-16 15:32:45'

      },
      {
        id: 9, 
        Valor: '40',
        created_at:'2022-04-16 15:32:50'

      },
      {
        id: 10, 
        Valor: '39.2',
        created_at:'2022-04-16 15:32:55'
      },
      { 
        id: 11, 
        Valor: '27',
        created_at:'2022-04-16 15:33:45'

      },
      {
        id: 12, 
        Valor: '24',
        created_at:'2022-04-16 15:34:50'

      },
      {
        id: 13, 
        Valor: '39',
        created_at:'2022-04-16 15:35:55'
      },
      {
        id: 14, 
        Valor: '34',
        created_at:'2022-04-16 15:36:55'
      },
    ])
  }
}

module.exports = HumSeeder
