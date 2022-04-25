'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PresenciaSchema extends Schema {
  up () {
    this.create('presencias', (table) => {
      table.increments('id')
      table.string('Valor').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('presencias')
  }
}

module.exports = PresenciaSchema
