'use strict'

/*
|--------------------------------------------------------------------------
| PrecensiaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class PrecensiaSeeder {
  static async run () {
    await Database.table('presencias').insert([
      { 
        id: 1, 
        Valor: '3.0202',
        created_at:'2022-04-16 15:32:45'

      },
      {
        id: 2, 
        Valor: '4.7202',
        created_at:'2022-04-16 15:32:50'

      },
      {
        id: 3, 
        Valor: '9.321',
        created_at:'2022-04-16 15:32:55'
      },
      { 
        id: 4, 
        Valor: '3.6302',
        created_at:'2022-04-16 15:33:45'

      },
      {
        id: 5, 
        Valor: '7.756',
        created_at:'2022-04-16 15:33:50'

      },
      {
        id: 6, 
        Valor: '6.6352',
        created_at:'2022-04-16 15:33:55'
      },
      {
        id: 7, 
        Valor: '3.8802',
        created_at:'2022-04-16 15:34:55'
      },
      { 
        id: 8, 
        Valor: '6.0252',
        created_at:'2022-04-16 15:32:45'

      },
      {
        id: 9, 
        Valor: '2.0209',
        created_at:'2022-04-16 15:32:50'

      },
      {
        id: 10, 
        Valor: '3.963',
        created_at:'2022-04-16 15:32:55'
      },
      { 
        id: 11, 
        Valor: '5.0282',
        created_at:'2022-04-16 15:33:45'

      },
      {
        id: 12, 
        Valor: '6.0452',
        created_at:'2022-04-16 15:34:50'

      },
      {
        id: 13, 
        Valor: '5.602',
        created_at:'2022-04-16 15:35:55'
      },
      {
        id: 14, 
        Valor: '1.6325',
        created_at:'2022-04-16 15:36:55'
      },
    ])
  }
}

module.exports = PrecensiaSeeder
