'use strict'

/*
|--------------------------------------------------------------------------
| UltraSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class UltraSeeder {
  static async run () {
    await Database.table('ultrasonicos').insert([
      { 
        id: 1, 
        Valor: '32',
        created_at:'2022-04-16 15:32:45'

      },
      {
        id: 2, 
        Valor: '45.3',
        created_at:'2022-04-16 15:32:50'

      },
      {
        id: 3, 
        Valor: '39.2',
        created_at:'2022-04-16 15:32:55'
      },
      { 
        id: 4, 
        Valor: '45',
        created_at:'2022-04-16 15:33:45'

      },
      {
        id: 5, 
        Valor: '27.9',
        created_at:'2022-04-16 15:33:50'

      },
      {
        id: 6, 
        Valor: '32.9',
        created_at:'2022-04-16 15:33:55'
      },
      {
        id: 7, 
        Valor: '32.9',
        created_at:'2022-04-16 15:34:55'
      },
      { 
        id: 8, 
        Valor: '12.30',
        created_at:'2022-04-16 15:32:45'

      },
      {
        id: 9, 
        Valor: '40.2',
        created_at:'2022-04-16 15:32:50'

      },
      {
        id: 10, 
        Valor: '34.2',
        created_at:'2022-04-16 15:32:55'
      },
      { 
        id: 11, 
        Valor: '22.2',
        created_at:'2022-04-16 15:33:45'

      },
      {
        id: 12, 
        Valor: '21.3',
        created_at:'2022-04-16 15:34:50'

      },
      {
        id: 13, 
        Valor: '30.2',
        created_at:'2022-04-16 15:35:55'
      },
      {
        id: 14, 
        Valor: '36.2',
        created_at:'2022-04-16 15:36:55'
      },
    ])
  }
}

module.exports = UltraSeeder
