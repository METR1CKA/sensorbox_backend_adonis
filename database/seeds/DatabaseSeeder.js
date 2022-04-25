'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Admin = require('./AdminSeeder')
const Rol = require('./RoleSeeder')

const Precensia = require('./PrecensiaSeeder')
const Humo = require('./HumoSeeder')
const Humedad = require('./HumSeeder')
const Gas = require('./GasSeeder')
const Temp = require('./TempSeeder')
const Ultra = require('./UltraSeeder')
class DatabaseSeeder {
  async run() {
    // Put yours seeders in the desired order
    await Rol.run()
    await Admin.run()
    await Temp.run()
    await Ultra.run()
    await Gas.run()
    await Humedad.run()
    await Humo.run()
    await Precensia.run()
    // await Marca.run()
    // await Genero.run()
    // await Categoria.run()
    // await Estado.run()
    
  }
}

module.exports = DatabaseSeeder
