'use strict'

/*
|--------------------------------------------------------------------------
| AdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Database = use('Database')
const Hash = use('Hash')
class AdminSeeder {
  static async run () {
    const encryptedPassword = await Hash.make('12345')
    await Database.table('users').insert([
      
      {
        id: 1,
        username:'admin15',
        email: 'admin@gmail.com',
        password: encryptedPassword,
        rolid: 1,
        created_at:'2022-04-16 15:32:53'

      },
      {
        id: 2,
        username:'cliente1',
        email: 'cliente@gmail.com',
        password: encryptedPassword,
        rolid: 2,
        created_at:'2022-04-16 15:32:53'

      },
      {
        id: 3,
        username:'visita',
        email: 'visitante@gmail.com',
        password: encryptedPassword,
        rolid: 3,
        created_at:'2022-04-16 15:32:53'

      }
    ])
  }
}

module.exports = AdminSeeder
