"use strict";

const Curso = use("App/Models/Curso");

/**
 * Resourceful controller for interacting with cursos
 */
class CursoController {
  /**
   * Show a list of all cursos.
   * GET cursos
   */
  async index() {
    const cursos = await Curso.all();
    return cursos;
  }

  /**
   * Create/save a new curso.
   * POST cursos
   */
  async store({ request }) {
    const data = request.only(["imagem", "titulo"]);
    const curso = await Curso.create(data);
    return curso;
  }

  /**
   * Display a single curso.
   * GET cursos/:id
   */
  async show({ params }) {
    const curso = await Curso.find(params.id);
    return curso;
  }

  /**
   * Update curso details.
   * PUT or PATCH cursos/:id
   */
  async update({ params, request }) {
    const data = request.only(["imagem", "titulo"]);
    const curso = await Curso.find(params.id);
    curso.merge(data);
    await curso.save();
    return curso;
  }

  /**
   * Delete a curso with id.
   * DELETE cursos/:id
   */
  async destroy({ params }) {
    const curso = await Curso.find(params.id);
    await curso.delete();
    return "Curso deletado";
  }
}

module.exports = CursoController;
