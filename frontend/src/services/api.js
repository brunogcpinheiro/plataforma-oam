import axios from "axios";

const api = axios.create({
  baseURL: "http://plataforma-oam-brunogcpinheiro.c9users.io:8080"
});

export default api;
