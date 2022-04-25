'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class RoleSeeder {
  static async run () {
    await Database.table('roles').insert([
      { 
        id: 1, 
        rol: 'Administrador',
        created_at:'2022-04-16 15:32:53'

      },
      {
        id: 2, 
        rol: 'Cliente',
        created_at:'2022-04-16 15:32:53'

      },
      {
        id: 3, 
        rol: 'Visitante',
        created_at:'2022-04-16 15:32:53'
      }
    ])
  }
}

module.exports = RoleSeeder
