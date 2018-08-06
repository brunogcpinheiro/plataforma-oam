"use strict";

const Schema = use("Schema");

class CursoSchema extends Schema {
  up() {
    this.create("cursos", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.string("imagem").notNullable();
      table.string("titulo").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("cursos");
  }
}

module.exports = CursoSchema;
