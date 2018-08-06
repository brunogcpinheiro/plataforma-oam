"use strict";

const Model = use("Model");

class Curso extends Model {
  users() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Curso;
