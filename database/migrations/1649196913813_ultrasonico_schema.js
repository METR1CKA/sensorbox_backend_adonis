'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UltrasonicoSchema extends Schema {
  up () {
    this.create('ultrasonicos', (table) => {
      table.increments('id')
      table.string('Valor').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ultrasonicos')
  }
}

module.exports = UltrasonicoSchema
