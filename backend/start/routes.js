"use strict";

const Route = use("Route");

Route.post("/login", "AuthController.login");

Route.post("/cursos", "CursoController.store").middleware("auth");
