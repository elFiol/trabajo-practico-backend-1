import Listas from "../database/model/listas.js";

export const listarTareas = async(req,res) => {
    try{
        const tareas = await Listas.find();
        res.status(200).json(tareas);
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "no se pudo encontrar la lista de tareas"
        })
    }
}

export const crearTarea = async(req, res) => {
    try{
        const productoNuevo = new Listas(req.body)
        await productoNuevo.save()
        res.status(201).json({
            mensaje: "la tarea fue creada correctamente"
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            mensaje: "No se pudo procesar la solicitud de crear una tarea"
        })
    }
}