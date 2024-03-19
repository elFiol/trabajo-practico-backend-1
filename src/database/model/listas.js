import mongoose, {Schema} from "mongoose";

const listasSchema = new Schema({
    contenido:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 60
    }
})

const Listas = mongoose.model("lista", listasSchema);

export default Listas;