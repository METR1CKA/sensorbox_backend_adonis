'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GasSchema extends Schema {
  up () {
    this.create('gases', (table) => {
      table.increments('id')
      table.string('Valor').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('gases')
  }
}

module.exports = GasSchema
