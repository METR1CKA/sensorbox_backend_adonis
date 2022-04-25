'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username').notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('rolid').unsigned().references('id').inTable('roles').onDelete('CASCADE').defaultTo(3)
      table.timestamps()
      // 1503250034278
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
