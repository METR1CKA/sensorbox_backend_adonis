'use strict'

/*
|--------------------------------------------------------------------------
| GasSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class GasSeeder {
  static async run () {
    await Database.table('gases').insert([
      { 
        id: 1, 
        Valor: 'Todo Bien',
        created_at:'2022-04-16 15:32:45'

      },
      {
        id: 2, 
        Valor: 'Se encontro gas',
        created_at:'2022-04-16 15:32:50'

      },
      {
        id: 3, 
        Valor: 'Todo Bien',
        created_at:'2022-04-16 15:32:55'
      },
      { 
        id: 4, 
        Valor: 'Todo Bien',
        created_at:'2022-04-16 15:33:45'

      },
      {
        id: 5, 
        Valor: 'Todo Bien',
        created_at:'2022-04-16 15:33:50'

      },
      {
        id: 6, 
        Valor: 'Se encontro gas',
        created_at:'2022-04-16 15:33:55'
      },
      {
        id: 7, 
        Valor: 'Se encontro gas',
        created_at:'2022-04-16 15:34:55'
      },
      { 
        id: 8, 
        Valor: 'Se encontro gas',
        created_at:'2022-04-16 15:32:45'

      },
      {
        id: 9, 
        Valor: 'Todo Bien',
        created_at:'2022-04-16 15:32:50'

      },
      {
        id: 10, 
        Valor: 'Todo Bien',
        created_at:'2022-04-16 15:32:55'
      },
      { 
        id: 11, 
        Valor: 'Se encontro gas',
        created_at:'2022-04-16 15:33:45'

      },
      {
        id: 12, 
        Valor: 'Se encontro gas',
        created_at:'2022-04-16 15:34:50'

      },
      {
        id: 13, 
        Valor: 'Todo Bien',
        created_at:'2022-04-16 15:35:55'
      },
      {
        id: 14, 
        Valor: 'Todo Bien',
        created_at:'2022-04-16 15:36:55'
      },
    ])
  }
}
module.exports = GasSeeder
