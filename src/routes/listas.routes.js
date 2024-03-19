import { Router } from "express";

const Productosrouter = Router();

Productosrouter.route('/productos').get().post();

export default Productosrouter