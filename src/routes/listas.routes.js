import { Router } from "express";
import { crearTarea, listarTareas } from "../controller/listas.controller.js";

const Productosrouter = Router();

Productosrouter.route('/tareas').get(listarTareas).post(crearTarea);

export default Productosrouter