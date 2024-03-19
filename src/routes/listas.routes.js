import { Router } from "express";
import { borrarTarea, crearTarea, listarTareas } from "../controller/listas.controller.js";

const Productosrouter = Router();

Productosrouter.route('/tareas').get(listarTareas).post(crearTarea);
Productosrouter.route('/tarea/:id').delete(borrarTarea);

export default Productosrouter