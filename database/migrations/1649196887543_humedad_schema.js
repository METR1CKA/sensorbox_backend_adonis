'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HumedadSchema extends Schema {
  up () {
    this.create('humedads', (table) => {
      table.increments('id')
      table.string('Valor').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('humedads')
  }
}

module.exports = HumedadSchema
