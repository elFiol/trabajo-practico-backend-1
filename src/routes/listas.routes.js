import { Router } from "express";
import { crearTarea } from "../controller/listas.controller.js";

const Productosrouter = Router();

Productosrouter.route('/tareas').get().post(crearTarea);

export default Productosrouter