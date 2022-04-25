'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HumoSchema extends Schema {
  up () {
    this.create('humos', (table) => {
      table.increments('id')
      table.string('Valor').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('humos')
  }
}

module.exports = HumoSchema
